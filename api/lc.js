const LIST="query submissionList($offset:Int!,$limit:Int!,$questionSlug:String!){questionSubmissionList(offset:$offset,limit:$limit,questionSlug:$questionSlug){submissions{id statusDisplay lang langName runtime timestamp}}}";
const DET="query submissionDetails($submissionId:Int!){submissionDetails(submissionId:$submissionId){runtimeDisplay code timestamp lang{verboseName}}}";
async function gql(query,variables,s,c){
  const r=await fetch("https://leetcode.com/graphql",{method:"POST",headers:{"content-type":"application/json","x-csrftoken":c,"referer":"https://leetcode.com/","origin":"https://leetcode.com","user-agent":"Mozilla/5.0","cookie":`LEETCODE_SESSION=${s}; csrftoken=${c}`},body:JSON.stringify({query,variables})});
  const t=await r.text();
  try{return JSON.parse(t)}catch{throw new Error(`LeetCode replied ${r.status}: blocked, or the session expired`)}
}
module.exports=async(req,res)=>{
  res.setHeader("Cache-Control","no-store");
  if(req.method!=="POST")return res.status(405).json({error:"POST only"});
  let b=req.body||{};if(typeof b==="string"){try{b=JSON.parse(b)}catch{b={}}}
  const {session,csrf,slug}=b;
  if(!session||!csrf||!/^[a-z0-9-]+$/.test(slug||""))return res.status(400).json({error:"missing session, csrf or slug"});
  try{
    const a=await gql(LIST,{offset:0,limit:20,questionSlug:slug},session,csrf);
    const subs=a?.data?.questionSubmissionList?.submissions||[];
    const ok=subs.find(x=>x.statusDisplay==="Accepted");
    if(!ok)return res.json({error:a?.errors?"LeetCode rejected the request (check cookies)":"no accepted submission found for "+slug});
    const d=await gql(DET,{submissionId:Number(ok.id)},session,csrf);
    const x=d?.data?.submissionDetails;
    if(!x||!x.code)return res.json({error:"could not read the code for submission "+ok.id});
    res.json({code:x.code,lang:x.lang?.verboseName||ok.langName,runtime:x.runtimeDisplay||ok.runtime,ts:Number(x.timestamp||ok.timestamp)*1000,id:ok.id,
      subs:subs.map(s=>({id:s.id,statusDisplay:s.statusDisplay,lang:s.langName||s.lang,timestamp:s.timestamp,runtime:s.runtime}))});
  }catch(e){res.status(502).json({error:e.message})}
};
