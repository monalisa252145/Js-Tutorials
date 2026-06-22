//*********nums*************

const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(5));

const hundreds = 100000000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString(`en-IN`));


//*****************maths************* */

console.log(Math);
console.log(Math.abs(-4));  //if you don't need the negative sign use abs
console.log(Math.round(4.6));  

console.log(Math.ceil(4.2)); //used to round numbers upward to the next largest integer

console.log(Math.floor(4.9)); //rounds a number downward to the next smallest integer

console.log(Math.max(4, 3, 6, 5));
console.log(Math.min(5,9,3,2));

console.log(Math.random()); // values in between 0 and 1
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 














