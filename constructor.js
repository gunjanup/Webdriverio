//object creation using constructor function
function detail(name,age) {
    console.log(this);
    this.name=name
    this.age=age
}
let det=new detail("rani",89)
console.log(det);
let dete=new detail("kajol",9)
console.log(dete);


//object creation using class
class date
{
    constructor(name,age)
    {
        console.log(this);
        this.name=name
        this.age=age
    }
}
let z=new date("hiii",87)
console.log(z);

//using object constructor and object keyword
let x=new Object()
x.pname="odyessey"
x.age=67
console.log(x);