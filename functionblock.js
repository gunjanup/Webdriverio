var a=30
function sample(a,b,c) {
    var a //var a=20 will override the the var a here 
    let g=10
    const i=10
    console.log("the function block1:"+(a+g+i));
    
    {
        
        var a=20
        let e=30
        const f=15  
        console.log("inside block first is:"+(a+f));
    }
    {
        var a=20
        let e=30
        const f=10  
        console.log("inside block second is:"+(a+e));
    }
    console.log("the  block:"+(a+i));
}
sample(20,20,20)
sample(a,8)



