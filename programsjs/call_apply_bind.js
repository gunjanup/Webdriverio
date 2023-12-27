let packageone={
    packagename:"assam",
    from:"dec-18-23",
    to:"jan-04-24",
    packagecost:"878978"


}
let packagedetails=function (a,b) {
    console.log(`package details are as follows ${this.packagename} ${this.from}  ${this.to} ${this.packagecost} ${a+b}`  );
}
let packagetwo={
    packagename:"tamilnadu",
    from:"dec-18-23",
    to:"jan-04-24",
    packagecost:"998098"


}
//call method
//packageone.packagedetails.call(packagetwo)
packagedetails.call(packagetwo,9,8)
//apply method
packagedetails.apply(packagetwo,[4,5])
//bind method
let d=packagedetails.bind(packageone)
console.log(d);
d(3,4)
