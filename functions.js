
//immediately invokable function -the invocation is required to be done immediately

(function details(name ,age ,rollno) {
    console.log("student details are:"+" "+name+" "+age+" "+rollno);
    
})
("millie","24",87987898)

//standard function

function canteen(food,price,calories) {
    
    console.log("canteen details are"+" "+food+" "+price+" "+calories);
}
canteen("dosa",90,'.650gm');

//function expression 
//1
let circus=function (ticket,food,animal) {
    return " the circus details are :"+ticket+"  "+food+"  "+animal;
   
}
console.log(circus(400,"meal","tiger"));
//2
const square=function (num) {
  return "the square of the number is:"+(num*num)  
}
const k=square(5)
console.log(k);
//3
function caladdition(num1,num2) {
  return "the addition of numbers are:" +(num1+num2);
}
console.log(caladdition(7,8));
//4
//arrow functions
let d=(a,b)=>(a+b);
let z=d(2,3)
console.log(z);


let a=a=>(a*a)
let s=a(2)
console.log(s);

const add=(n1,n2)=>(n1+n2)
console.log(add(6,7));

const isEven=n1=>
{
    if(n1%2==0)
    return true;
else
return false;
}
console.log(isEven(6));

