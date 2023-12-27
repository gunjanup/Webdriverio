let arr=[89,90,67,556,67]
for (let index in arr) {
   console.log(index+" "+arr[index]);
        
    }


    let ar=[76,89,78,56,45,23]
    for (let index of ar) {
        console.log(index+" "+ar[index]);
        
    }

    let sr=['java','c','c++','phython']
    for (let index in sr) {
    if(index>1)  
    {
        console.log(index+" "+sr[index]);

    }
        }
    
        let city=['jaipur','raipur','jodhpur','durgapur']
        let substr='pur'
        for (let cindex in city) {

            if(city[cindex].includes('pur'))

           console.log(cindex+" "+city[cindex]); 
           
        }

    //declaring an object employee
    const courses={
        firstcourse:'javascript',
        secondcourse:'react',
        thirdcourse:'angular js'
    };
    let value='';
    //using for in loop
    for(let item in courses)
    {
        value+=courses[item]+" ";
    }
    console.log(value);


    //for each loop
    let a=[87,87,53,33,55,84]
    a.forEach(function(a) {
        console.log(a*2);
        
    })

    let aj=[8.9,9.8,2.3,4.5,6,0]
    aj.forEach(function(aj){
      console.log(aj*3);  
        
    })

