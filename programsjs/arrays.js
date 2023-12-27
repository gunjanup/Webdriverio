/*let a=['banana','apple','cherry','watermelon']
console.log(a.sort());//sorts array alphabetically

console.log(a.reverse());//sorts array in descending order

let b=[25,100,376,456]
console.log(b.sort());
b.sort(function (a,banana) {
    return a-b
    
});
console.log(b);


//declare using array literal
const cars=['volvo','BMW','suzuki',"nixon"]
console.log(cars);
const colors=[];
colors[0]="red"
colors[0]="violet"//changes value
colors[1]="white"
colors[2]="blue"
console.log(colors);
const vowels=new Array("a","e","i","o","u")
console.log(vowels);

//converting an array to String

const fruits=["banana","apple","grapes","papaya"]
//document.getElementById("demo")=fruits.toString();
fruits[6]="lemon"
console.log("join the array:"+fruits.join());
console.log(fruits);


let text='apple,banana,kiwi'
let part=text.slice(4,7)
console.log(part);
part=text.substring(8,13)
console.log(part);
text.substr
let tart="please visit Microsoft"
let newtart=tart.replace("Microsoft","w3schools")
console.log(newtart);


let text2 = "Apple, Banana, Kiwi";
let part2 = text.slice(7);
console.log(part2);
let part3 = text.slice(-12);
console.log(part3);
let part4 = text.slice(-12, -6);
console.log(part4);

let jhj=['hi',2,true,123,"hjbj","bghjgj",'jhjuh']
let hjk=jhj.slice(1,3)
let jhi=jhj.splice(1,5)
console.log(hjk);
console.log(jhi);*/



//join method
//The join() method returns an array as a string.
//The join() method does not change the original array.
//Any separator can be specified. The default is comma (,).
//The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,
// separated by commas or a specified separator string. 



/*const courses=['java','c++','c#','javascript']
console.log(courses.join( ));
console.log(courses.join(' and '));
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/g, "red");
console.log(text.charAt(0));
console.log(result);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

console.log(points);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const cour=['java','c++','c#','javascript']
console.log(fruits.reverse());
console.log(cour.sort());
console.log(cour.reverse());*/


/*let te = "Helloworld!";
console.log(te.substring(-2,5))

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(-3, -1);
console.log(fruits.slice(1,3));
console.log(citrus);

var str="ABCDE"
for(let i=0;i<str.length;i++)
{
var str1=str.charCodeAt(i)
console.log(`${str1}`);
}*/

let te="helloworld"
console.log(te.slice(-4,-2));
console.log(te.substring(-4,-2));