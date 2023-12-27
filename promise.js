

async function execute()
{
    console.log("login to application");
    let p=new Promise((resolve,reject)=>
    {
setTimeout(()=>{
    resolve("naviagate to home page")
    reject("error")

},2000)
 });
 await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
 let p1=new Promise((resolve,reject)=>
 {
    setTimeout(()=>
    {
        resolve("fetch page title")
        reject("error")
    },3000);
 })
 await p1.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
 console.log("logout application");
}
execute()