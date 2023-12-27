//using object literal {} created with key value pair

/*const person={

    name:'john',
    age:20,
    hobbies:['reading','games','coding'],
    greet:function () {
        console.log("hello everyone");
        
    },
    score:{
        maths:90,
        science:80
    }

};
console.log(typeof(person));
console.log(person.hobbies[1]);
person.greet();
console.log(person.score.maths);
//Create an Object using Instance of Object Directly
//Here, the new keyword is used with the Object() instance to create an object.
const person2=new Object(
    {
        name:'john',
        age:20,
        hobbies:['reading','games','coding'],
        greet:function () {
            console.log("hello everyone");
            
        },
        score:{
            maths:90,
            science:80  
    }
});
console.log(typeof(person));
console.log(person.hobbies[2]);
person.greet();
console.log(person.score.maths);*/

//Create an object using Constructor Function
//In the above example, the Person() constructor function is used to create an object using the new keyword.
   //creates a new object.
function Person() {
    this.name='gunjan'
    this.age=20,
    this.hobbies=['reading','games','coding']
    this.greet=function () {
        
        console.log("hello everyone");
    }
    this.score={
        maths:90,
        science:80
    }

}
const per=new Person()
console.log(typeof(per));
console.log(per.name);
console.log(per.hobbies[0]);
per.greet()
console.log(per.score.maths);