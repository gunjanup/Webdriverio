var q=20
let w=10
const x=10
console.log("script scope:"+(q+w));

function run(r,t,y,u) {
    console.log("function scope one:"+(t+r+y+u));
    {
        var j=40
        let p=10 ,m=20
        console.log("the block scope"+(j+p+m));
    }
    console.log("the function scope two:"+(t+r));

}
run(q,w,90,10)

