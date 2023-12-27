class tour{
    Tpackagename="assam"
   static  Tpackagecost=87688

   constructor(fromdate,lastdate)
   {
    this.fromdate=fromdate
    this.lastdate=lastdate
   console.log(`constructor is calling:${tour.Tpackagecost}+${this.fromdate}+${this.lastdate}`)
   }
   static details()
   {
    let p1=new tour()
console.log(`static varaible "${tour.Tpackagecost} ${this.Tpackagecost} non static variable ${p1.Tpackagename}`);
   }
tourdetails()//non static method
{
    let p=new tour()
    console.log(`static ${tour.Tpackagecost} non static${p.Tpackagename}${this.Tpackagename} constructor value ${this.fromdate} ${this.lastdate}`);
}
}
//static
//tour.details()
//non static
//let t=new tour("dec-6-23","jan-6-24")
//t.tourdetails()
//console.log(t.fromdate);
//console.log(t.lastdate);

class UserTour extends tour
{

constructor(Pname,Pcost,Pduration)
{
    super(Pname,Pcost)
    this.Pduration=Pduration
}
sample()
{
    console.log(`${this.Pduration}     ${this.Pname}      ${this.Pcost}      ${this.Tpackagename}       ${this.Tpackagecost}      ${this.fromdate}    
        ${this.lastdate}`);
}
tourdetails()
{
    super.tourdetails()//parent class implemenetation
    console.log("new implementation");
}
}
let d=new UserTour("spain",8878,"3months")
d.sample()
d.tourdetails()

export default new tour()
