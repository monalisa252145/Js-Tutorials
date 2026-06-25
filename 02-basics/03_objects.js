//objects declared in two Way
//1 => constructor 2=> literals

//singleton => when we create a object it create only one object in constructor
//object.create

//way of declaring object => object literals

const mysym = Symbol("key1")

const JsUser = {    //where JsUser is the objectname & {} is the object
    name: "Mona",
    "full name": "Monalisa",
    [mysym] : "mykey1", //symbol keyword
    age: 18,
    location: "Delhi",
    email: "mona@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

console.log(JsUser.email)  //Access the value using (.)
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);
console.log(typeof[mysym]);

JsUser.email = "arjun@gmail.com"  //change the value
//Object.freeze(JsUser) // lock the value means we cannot change the value
JsUser.email ="mahi2gmail.com"

console.log(JsUser);

//***********************FUNCTION***************

JsUser.greeting = function(){
    console.log("Hello JS Users");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS Users, ${this.name}`);   
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());













