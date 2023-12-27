//map
let num=[1,5,7,8,3,2,3]
let e
let doublenum=num.map((e) => e*2);
console.log(`${doublenum}`);

let double=num.flatMap((e)=> e*3)
console.log(`${double}`);

//F->C
//(F-32)*(5/9)
let ftemp=[90,56,45,32,45]
function fahtocel(fah) {
    return (fah-32)*(5/9);
    
}
let celtemp=ftemp.map(fahtocel)
console.log(`${celtemp}`)

//filter

let numbers=[4,6,7,8,9]
let nume=numbers.filter((e)=> e%2==0);
console.log(`${nume}`);

let employee=[
    {name:"ross",age:34,gender:"male"},
    {name:"monica",age:35,gender:"fmale"},
    {name:"chandlier",age:37,gender:"male"},
    {name:"phoebe",age:35,gender:"fmale"},
    {name:"rachel",age:33,gender:"fmale"},
    {name:"joey",age:31,gender:"male"},
      
]
let famleg30=employee.filter((emp)=>
{
    return emp.gender=="fmale" && emp.age>30;
}
);
console.log(famleg30);