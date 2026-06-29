
// Truthy value => means we assume tha the value is true
//truthy values => "0", "false", " ", [] ,{} , function(){}

const userEmail = "h@hitesh.ai"

if(userEmail) {
    console.log("Got user email");
    
} else{
    console.log("don't have user email");
    

}


//falsy values 

// values are => false, 0 , -0, BigInt 0n, "", null, undefined, NaN


const userEmail1 = "h@hitesh.ai"
if(userEmail1.length === 0){
    console.log("Array is empty");
    
}

const emptyObj =  {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    

}


//logical operator => && , ||

//Nullish Coalescing Operator (??): null undefined

let val1;
 val1 = 5 ?? 10         // first come first assign value
 console.log(val1);
 
val1 = null ?? 10
console.log(val1);


val1 = undefined ?? 15
console.log(val1);


val1 = null ?? 10 ?? 20

console.log(val1);

//Ternary Operator

//condition ? true : false


const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
;


