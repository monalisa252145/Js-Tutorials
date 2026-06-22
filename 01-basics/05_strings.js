const name = "Mahi"
const repoCount = 50

// `` => string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String (`his-teh-hc`)

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//trim()
const newStringOne = "  mona   "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url = "https://mona.com/mona%20lisa"
console.log(url.replace(`20`,`-`));
//includes
console.log(url.includes(`sunder`));
console.log(url.includes(`lisa`));
//split
console.log(gameName.split(`-`));











