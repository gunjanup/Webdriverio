//isArray
let numbers=[2,4,5,6,7,,8,9,5,]
console.log(Array.isArray(numbers));
let text="javascript"


//checking whethe text ia an array or not
console.log(Array.isArray());
//passing an empty array
console.log(Array.isArray([]));
// we have created an array with element 7 and
// passed that value to isArray()
console.log(Array.isArray(new Array(7)));
//passing a boolean value
console.log(Array.isArray(true));
//passing undefined
console.log(Array.isArray(undefined));
//not passing any argument 
console.log(Array.isArray());


//concat-concat() method returns a new array by merging two or more values/arrays.
//concat() Parameters
//The concat() method takes in an arbitrary number of arrays and/or values as arguments.
let pnum=[8,8,0,7,8]
let num=[9,7,3,4,5]
let jarr=pnum.concat(num)
console.log(`${jarr}`)
var lang1=["javascript","java","phython","c++"]
var lang2=["html","css","reactjs"]
var newarr=lang1.concat(lang2)
console.log(`${newarr}`);
var newarr1=lang2.concat("nodejs",lang1)
console.log(`${newarr1}`);

//constructor()
//The constructor property returns the constructor function for the array.
//constructor Syntax The syntax to access the constructor property is:
//arr.constructor
// arr is an array.
//constructor Parameters
//The constructor is a property in JavaScript, so it doesn't take any parameters.


let cons=lang1.constructor;
console.log(cons);

//copywithin
//The copyWithin() method copies array elements from one position to another in the given array.
//Syntax arr.copyWithin(target, start, end)

//entries()
//returns a new Array Iterator object containing key/value pairs for each array index.

const alphabets=['a','b','c']
// array iterator object that contains
// key-value pairs for each index in the array
let iterator=alphabets.entries();
//iterating through key-value pairs in the array
for (let entry of alphabets) {
    console.log(entry);
}
for (let entry of iterator) {
    console.log(entry);
    
}

let iterator1=alphabets.entries();
//using built in next()
console.log(iterator1.next().value);

//every()method checks if all the array elements pass the given test function.
function checkAdult(age) {
    return age>=18;
    }
    const ageArray=[56,78,46,89,98]
    let check=ageArray.every(checkAdult);
    console.log(check);


