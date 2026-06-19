//primitive


// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt,

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// IN Symbol if the value seems same but actually its different

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bignumber = 3434567898765443n
console.log(bignumber);


//Reference datatype (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]

let myObj = {
    name: "mona",
    age: 21,
}

const myFunction = function(){
    console.log("helloworld");
    console.log(myFunction);
    
    
}

console.log(typeof myFunction);
console.log(heros);


//********************************************************** */
//   STACK (Primitive),  HEAP (Non-Primitive)


let myYoutubeName = "monalisa"

let anotherName = myYoutubeName;
anotherName = "chaiaurcode";
console.log(anotherName);
console.log(myYoutubeName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "mona@google.com"

console.log(userOne.email);
console.log(userTwo.email);



