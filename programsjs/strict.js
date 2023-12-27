" use strict"
console.log(this);//this is pointing to window object

//this keyword inside an function
let obj=
{
    cname:'abc',
    det:function () {
        console.log(this);  //this is pointing to object itself ie obj
    }

}

obj.det()

//this keyword in standard function
/*function add() {
    console.log(this); //this is pointing to undefined

}
add()


//this keyword in arrow function
let d=()=>
{
    console.log(this);//this is pointing to window object
}
d()*/