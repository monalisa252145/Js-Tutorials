
//***************************ARRAYS**********************/


//size of arrays in js is resizable and contain a mix of different data types
//js arrays are 0-indexed
//array Elements cannot be accessed by arbitary strings as 

//SHALLOW COPY
//JavaScript array-copy operations create shallow copies
//shallow copy => it is a copy whose properties share the same references as those of the source object from which thw copy was made

//DEEP COPY
//whose properties don't share the same references

//declaring  and printing of array
const myArr = [4,5,6,7,8]
const myHeros = ["shaktiman" , "nagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr[0]);
console.log(myHeros[1]);
console.log(myArr2[3]);


//ARRAY METHODS

//01 PUSH
myArr.push(9)
myArr.push(23)
console.log(myArr);

//02 POP
myArr.pop()
console.log(myArr);

//03 unshift
myArr.unshift(23)
console.log(myArr);

//04  shift
myArr.shift()
console.log(myArr);

//operations
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));


const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof(newArr));

//slice => copies element into a new array without changing the original array
//SPLICE => mutates the original array by adding, removing, or replacing elemnts

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);












