//if

//syntax => if(condition){}

if( 2 == "2" ){
    console.log("executed");
    
}

// <, >, <=, >=, ==, !=, ===, !==

const temperature = 45;

if(temperature < 50){
    console.log("less than 50");
}
console.log("temperature is greater than 50");

//conditional  => if(){}else{}


const temperature1 = 48

if(temperature1 < 50){
    console.log("less than 50");
    
}
else {
    console.log("temperature1 is greater than 50");
    
}


//scope related question

//var => completely global means it access by outside variable

const score = 200;
if(score > 100){
    const power = "fly"
    console.log((`user power: ${power}`));
    
}


//if-else if - else

 const balance = 900
 
 if(balance < 500){
    console.log("less than 500");
    
 }
 else if(balance < 750) {
    console.log("less than 750");
    
 }
 else {
    console.log("greater than 750");
    
 }


 //************************* */

 const userLoggedIn = true
 const debitcard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true

 if(userLoggedIn && debitcard){
    console.log("allow to buy course");
    
 }

 if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
 }

