"use strict";(()=>{var e={};e.id=596,e.ids=[596],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14104:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>y,originalPathname:()=>S,patchFetch:()=>v,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>h});var o={};t.r(o),t.d(o,{POST:()=>d});var n=t(51762),s=t(24143),a=t(14876),i=t(53552),u=t(94922),c=t(62002);async function d(e){try{let r=await e.json(),{category:t,name:o,duration:n,img1:s,img2:a,description:i,syllabus:d}=r;console.log(r);let p=new c.Z({category:t,name:o,duration:n,img1:s,img2:a,description:i,syllabus:d}),l=await p.save();return u.NextResponse.json({message:"Course created successfully",success:!0,savedCourse:l})}catch(e){return console.error(e),u.NextResponse.json({error:e.message},{status:500})}}(0,i.$)();let p=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/add_course/route",pathname:"/api/add_course",filename:"route",bundlePath:"app/api/add_course/route"},resolvedPagePath:"G:\\CODSOFT\\pathshala\\src\\app\\api\\add_course\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:l,staticGenerationAsyncStorage:g,serverHooks:m,headerHooks:y,staticGenerationBailout:h}=p,S="/api/add_course/route";function v(){return(0,a.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:g})}},53552:(e,r,t)=>{t.d(r,{$:()=>s});var o=t(11185),n=t.n(o);async function s(){try{n().connect("mongodb+srv://sunnypatelkoder:sunnypatelkoder@cluster0.9gjeii7.mongodb.net/pathshala");let e=n().connection;e.on("connected",()=>{console.log("MONOG DB connceted successfully")}),e.on("error",e=>{console.log("MONOGO DB connection erorr. please make sure mongodb is runnign",+e)})}catch(e){console.log("Something went wrong"),console.log(e)}}},62002:(e,r,t)=>{t.d(r,{Z:()=>a});var o=t(11185),n=t.n(o);let s=new(n()).Schema({category:{type:String,required:!0},name:{type:String,required:!0},duration:{type:String,required:!0},img1:{type:String,default:"/android.png.webp"},img2:{type:String,default:"/android.png.webp"},description:{type:String,required:!0},syllabus:[{chapter:{type:String,required:!0},topics:[{topicName:{type:String,required:!0},topicLink:{type:String,required:!0}}]}]}),a=n().models.Course||n().model("Course",s)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[10,716],()=>t(14104));module.exports=o})();