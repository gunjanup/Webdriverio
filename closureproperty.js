
//nested function
//outer function
/*function greet(name) {
    //inner function
   function displayname() {
    console.log("hi"+"   "+name);
   } 
   //calling inner function
   displayname();
    
}
//calling outer function
greet("hello")


function welcome(roll) {
    function goodbye() {
        return "bye will meet:"+roll;
        
    }
    
    
}
const g1=welcome(23)
console.log(g1);*/


//closure property
//outer function
/*function south() {
    let name='tamilnadu'
    //inner function

   function north() {
    return "hi"+"  "+name
    
   } 
   return north
}
let great=south()
console.log(great);
console.log(great());*/


function outer() {
    let count=0
    return function inner() {
        console.log(count);
        
    }
    
}
let ret=outer()
ret()
ret()