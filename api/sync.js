const UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const PROFILES=[
  {referer:"https://leetcode.com/submissions/",csrf:true,accept:"application/json, text/plain, */*"},
  {referer:"https://leetcode.com/",csrf:false,accept:"application/json"}
];
async function get(url,s,c,pi){
  const p=PROFILES[pi]||PROFILES[0];
  const h={"content-type":"application/json",accept:p.accept,referer:p.referer,origin:"https://leetcode.com","user-agent":UA,cookie:`LEETCODE_SESSION=${s}; csrftoken=${c}`};
  if(p.csrf)h["x-csrftoken"]=c;
  const r=await fetch(url,{headers:h,redirect:"manual"});
  const t=await r.text();
  if(r.status>=300&&r.status<400)throw new Error("LeetCode redirected to login — your cookies expired");
  try{return JSON.parse(t)}catch{throw new Error(`LeetCode replied ${r.status} instead of JSON: blocked or logged out`)}
}
module.exports=async(req,res)=>{
  res.setHeader("Cache-Control","no-store");
  if(req.method!=="POST")return res.status(405).json({error:"POST only"});
  let b=req.body||{};if(typeof b==="string"){try{b=JSON.parse(b)}catch{b={}}}
  const {session,csrf}=b;
  if(!session||!csrf)return res.status(400).json({error:"missing session or csrf"});
  const cap=Math.min(Math.max(Number(b.pages)||8,1),25);
  const dbg={pages:0,seen:0,accepted:0,withCode:0,slugs:[],firstKeys:null,lastKey:false};
  const bySlug={};
  try{
    let url="https://leetcode.com/api/submissions/?offset=0&limit=50",guard=0,pi=0,tried=[];
    while(url&&dbg.pages<cap&&guard++<40){
      let j=await get(url,session,csrf,pi);
      if(dbg.pages===0&&j&&j.detail&&pi<PROFILES.length-1){tried.push(String(j.detail));pi++;j=await get(url,session,csrf,pi)}
      if(dbg.pages===0){
        if(j&&j.detail)throw new Error(String(j.detail)+(tried.length?" (tried "+PROFILES.length+" header profiles)":""));
        const f=(j&&j.submissions&&j.submissions[0])||null;
        dbg.firstKeys=f?Object.keys(f).slice(0,24):null;
        dbg.profile=pi;
      }
      const list=Array.isArray(j&&j.submissions)?j.submissions:[];
      dbg.seen+=list.length;
      for(const x of list){
        const acc=Number(x.status)===10||String(x.status_display||"").trim()==="Accepted";
        if(!acc)continue;
        dbg.accepted++;
        const slug=x.title_slug||((String(x.url||"").match(/\/problems\/([a-z0-9-]+)/)||[])[1]||"");
        if(!slug)continue;
        if(dbg.slugs.length<400)dbg.slugs.push(slug);
        if(bySlug[slug])continue;
        const code=x.code||"";
        if(code)dbg.withCode++;
        bySlug[slug]={slug,lang:x.lang||"",runtime:x.runtime||x.time_consumed||"",ts:Number(x.timestamp||0)*1000,id:Number(x.id||0),code,title:x.title||""};
      }
      dbg.pages++;
      if(j&&j.has_next&&list.length){
        dbg.lastKey=!!j.last_key;
        url=j.last_key
          ? "https://leetcode.com/api/submissions/?limit=50&last_key="+encodeURIComponent(j.last_key)
          : `https://leetcode.com/api/submissions/?offset=${dbg.pages*50}&limit=50`;
        await new Promise(r=>setTimeout(r,300));
      }else url=null;
    }
    if(!dbg.seen)throw new Error("LeetCode returned an empty submission history — cookies are most likely expired");
    if(!Object.keys(bySlug).length)throw new Error("No accepted submissions found in the last "+dbg.seen+" entries");
    res.json({subs:Object.values(bySlug),dbg});
  }catch(e){res.status(502).json({error:e.message,dbg})}
};
