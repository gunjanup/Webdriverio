//function declaration
//for user input
import Prompt from "prompt-sync";
const prom=Prompt()


function add(a,b) {
   return a+b; 
}
//take input from the user

let num1=parseFloat(prom("enter first number:"))
let num2=parseFloat(prom("enter second  number:"))

//calling function
let result=add(num1,num2);

console.log("the sum is "+result);
