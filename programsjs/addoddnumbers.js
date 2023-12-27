//callbackfunction
//the sum of odd numbers in an array
function odd(a,n) {
let osum=0
for(let i=a;i<n;i++)
{
    if(i%2!=0)
    osum=osum+i;
}
console.log("the sum of odd numbers: "+osum);
}

//the sum of even numbers in an array
function even(b,m) {
let esum=0
for(let i=b;i<m;i++)
{
    if(i%2==0)
    esum=esum+i;

}
console.log("the sum of even no is:"+esum);
}
//program to print sum of array numbers

function sumarray(k,n) {
    let sum=0
    for(let i=0;i<n;i++)
    {
        sum+=i;
    }
    console.log("the sum of array element is:"+sum);
    
}


//high order function
function perform(dataone,datatwo,callback1,callback2,callback3) {
    callback1(dataone,datatwo)
    callback2(dataone,datatwo)
    setTimeout(() => {
        callback3(dataone,datatwo)
        
    }, 2000);
    
}
perform(1,10,odd,even,sumarray)