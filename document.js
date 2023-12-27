document.getElementById('gr').innerHTML="hai good evening"
document.getElementById('js').innerHTML="js session is going on"


document.getElementById('cc').onclick=demo  
function demo() {
    document.getElementById('cc').innerHTML='Clicked'
    
}
document.getElementById('dd').onclick=demo1

function demo1() {
    document.getElementById('dt').innerHTML=Date()
}