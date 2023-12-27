//1.var:old way ,keyword
//ES6
//scope:var
//functionally/locally+global 
var x=10
function test() {
    var y=20
    
}
console.log(x);
var pop="hi js"
function rel() {
    var top="hello"
  
    console.log(top);  
}
rel();
//re-initialization and re-declaration is possible 
var browser="chrome"
var browser="firefox"
browser="edge"
console.log(browser);

var g
console.log(g);
g="india"
console.log(g);



