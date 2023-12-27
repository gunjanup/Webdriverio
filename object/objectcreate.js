let productdetails={
    pname:"smartphone",
    price:25000,
    brand:"samsung",
    carddetails:function () {
        console.log(`product available in cart as follows ${this.pname} ${this.price} ${this.brand}`);
    }

}
let product2=Object.create(productdetails)
console.log(product2);
product2.pname="laptop"
product2.price=78000
product2.brand="dell"
product2.carddetails=function cart () {
    console.log("new implementation");
}
console.log(product2);
product2.carddetails();
console.log(productdetails);