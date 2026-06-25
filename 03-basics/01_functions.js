
//**************************************

function sayName() {
    console.log("M");
    console.log("O");
    console.log("N");
    console.log("A");
}

sayName()

//*************************************** */

function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
    
}

addTwoNumber(3,6)
addTwoNumber(4, null)


//**************************************************** */

function addtwonumbers(number1, number2){

    let result = number1 + number2
    return result
}

const result = addtwonumbers(3, 5)
console.log("Result:", result);

//************************************************* */

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("Mona"))
console.log(loginUserMessage());

//********************************************* */

function calculateCartprice(val1, val2,...num1){
    return num1
}

console.log(calculateCartprice(200, 400, 500, 2000));

//**************************************** */



function handleObject(anyobject){
    console.log(`username is ${anyobject.username1} and price is ${anyobject.price} `);
    
}

handleObject({
    username1: "sam",
    price: 399
})



//***************************************************** */

const myNewArray = [200, 400, 100, 600]

function  returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
