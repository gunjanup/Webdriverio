let persondetails=
{
    pname:'sonal',
    age: 65,
    phnno:[555857767,87878978],
    location:'bangalore',
    date:function () {
        console.log("person details"+" "+this.pname+" "+this.location);
        
    },
    spousedet:{
        sname:"rohit",
        age:26
    }

}
console.log(persondetails);
console.log(persondetails.phnno[0]);
persondetails.date()
console.log(persondetails.spousedet.sname);
//adding a property
persondetails.newprop="hghjgh"
//delete a property
delete persondetails.location
//modify
persondetails.age=36
console.log(persondetails);