const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


//marvel_heros.push(dc_heros);


// it create array  into array but cann't merge into one array
//console.log(marvel_heros); 
//console.log(marvel_heros[3][2]);


//************CONCATE **********************88 */most used
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);


//*******************SPREADOUT*************
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//***************FLAT=> returns a array with subarray */
const annother_array = [1,2,3,[4,5,6],7,[8,9],[4,5,6]]
const real_another_array = annother_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Mona"))
console.log(Array.from("Mona"));
console.log(Array.from({name: "mona"}));  //interesting


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));



