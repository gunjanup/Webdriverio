let n=10
if(n>10)
{
    console.log("number is greater than"+n);
}
else{
    console.log("number is less than "+n);
}

let tourpackages=19000

let airticket=2500
let hotelstay=1600

if(tourpackages>19000)
{
    console.log("the packages inculudes pickup facility");
    console.log(airticket+hotelstay);

}
else
    console.log("the packages doesnot include pickup facility");
console.log(airticket+hotelstay);


let ar="rina"
let rev=""
let orgstr=ar;
for(let i=ar.length;i>=0;i--)
{
rev=rev+ar.charAt(i);
}
console.log(rev);
if(orgstr==rev)
{
    console.log("the string is palindrome");
}
else
{
    console.log("the string is not palidrome");
}

let arr="welcome to the world"
let s=arr.split(" ");
let i;
console.log(s);

let temp=s[0];
s[0]=s[s.length-1];
s[s.length-1]=temp;
for( i=0;i<s.length;i++)
{
//console.log(s[i]);
process.stdout.write(s[i] + " ")
}


let num=5;
let fact=1
for(let i=1;i<=num;i++)
{
    fact=fact*i;
}

console.log(fact+" "+num);



let myvar=0
for(let i=1;i<11;i++)
{
    myvar = myvar + '  ' + i;
   
}
console.log(myvar+" ");

 