/*let a 
console.log(a);
console.log(be);
var be
console.log(be);
f=5
console.log(f);
var f

console.log(add(2,3));
function add(p1,p2) {
    return p1+p2
    
}
let k=4
console.log(k);
function greet() {
  b='hello' 
  console.log(b); 
  var b
}
greet()*/


console.log("hello");
let t=10
function x() {
  t=30
  console.log(t);
  
}
t=50
console.log(t);
x()
console.log(t);

function codeHoist() {
var a=10;//assigned to global scope hence able to print it outside the function
  let b=50;
}
codeHoist();
console.log(a);//10
console.log(b);//reference error-when trying to access a previoulsy un declared variable
  

