let name={
    fname:"gunjan",
    lname:"prasad",
    printfullName:function (hometown,state) {
        console.log(this.fname+" "+this.lname+" "+hometown+" "+state);
    }
}
name.printfullName.call(name,"kolkatta","westbengal")
let name2={
    fname:"sachin",
    lname:"tendulkar",
}

//function borrowing
name.printfullName.call(name2,"mumbai","maharashtra");
//apply method
name.printfullName.apply(name2,["mumbai","maharashtra"]);
//bind method
let printmyname=printfullName.bind()