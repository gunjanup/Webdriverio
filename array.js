//arguments array
//default parameter
//template literals
function details(name ,phnno=879879889,location) {

    console.log("person details are"+" "+name+" "+phnno+" "+location);

    console.log(`person details are ${name} ${phnno} ${location}`);
   console.log(arguments);
}
details('xyx',this.phnno,'hjghjgjh',"hghgjh","ghhgfghfhg")

