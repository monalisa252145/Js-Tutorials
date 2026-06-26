
//******************************************** */
//var c = 300

let a = 300
if(true) {
    let a = 10
    const b = 20
    console.log("INNER:", +a);
    console.log(b);
    
    
}


console.log(a);
//console.log(b);
//console.log(c);


function one() {
    const username = "mona"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    
    two()
    
}

one()


if(true) {
    const username = "hitesh"
    if(username == "hitesh") {
        const website = " youtube"
        console.log(username + website);
        
    }
}



//****************INTERESTING********************** */

function addone (num) {
    return num + 1
}
addone(5)



const addTwo = function(num){
    return num + 2
}
addTwo(5)

//this => used forshowing  context
const user = {
    username: "Arjun",
    price: 999,

    welcomeMessage: function() {

        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);


//**********ARROW FUNCTION********************* */

//1. Explicit

//const addTwo (num1, num2) => {
   // return num1 + num2
//}
//console.log(addTwo(3,4));


//2.Implicit

const firstTwo = (num1, num2) =>   num1 + num2
console.log(firstTwo(4,6));

// const addTwo = (num1 + num2) => (num1 + num2)

//const addTwo = (num1, num2) => ({username: "mona"})