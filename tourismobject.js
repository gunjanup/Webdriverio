let signupuser=
{
    firstname:"dilkush",
    lastname:"nagma",
    email:"dilkushnagma89@gmail.com",
    mobileno:[876756983,8767688],
    tour:function () {
        console.log("signup user details are:  "+" "+this.firstname+"   "+this.lastname+"    "+this.email);
    },
    address:{
        pincode:560076,
        postoffice:"btm",
    }
}
//console.log(signupuser);
signupuser.tour();
signupuser.age="female" 
signupuser.dob="19-90-1997"
console.log(signupuser);
//printing by using for in loop
for (const key in signupuser) {
    if (Object.hasOwnProperty.call(signupuser, key)) {
        const element = signupuser[key];
        console.log(key+" :="+signupuser[key]);
        
    }
}
for (let j = 0; j < signupuser.length; j++){

    console.log(signupuser[j]);
    
    }