
//************DATE**************** */

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString()); //return date as a string value
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreated1Date = new Date(2023, 0 , 23)
console.log(myCreated1Date.toDateString());
let myCreated2Date = new Date(2023, 0 , 23, 5, 3)
let myCreated3Date = new Date("2023-01-14")
let myCreated4Date = new Date("25-01-2005")
console.log(myCreated1Date.toLocaleString());
console.log(myCreated2Date.toLocaleString());
console.log(myCreated3Date.toLocaleString());
console.log(myCreated4Date.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreated1Date.getTime());
console.log(Date.now() / 1000);


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long"
    
})












