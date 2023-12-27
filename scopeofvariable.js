var a=10
let b=20
const c=30
// the scope of var is always global
//the scope of let and const is block level or function level
function add(a,b,c) {
    console.log(a+b+c);
    
}

function sub(b,c) {
    console.log(b-c);
}
 
sub(b,c)
console.log("the sum is:" +(a+b+c));

add(a,b,c)
{
    //the scope of var will be global 
    var a=40
    let b=29
    const c=40

    console.log(a+b+c);

}