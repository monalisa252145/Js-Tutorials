
// for Each 


// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     return item;
// })

// console.log(values);

// Filter method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter ( (num) => {
        return num > 4
}  )
console.log(newNums);



const bookName = [
{ title: 'Book one', genre: 'Fiction', publish: 1981,
    edition: 2004},
{ title: 'Book two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008},
{ title: 'Book three', genre: 'History', publish: 1999,
    edition: 2007},
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
    edition: 2010},
{ title: 'Book Five', genre: 'Science', publish: 2009,
    edition: 2010},
{ title: 'Book six', genre: 'Fiction', publish: 1987,
    edition: 2010},
{ title: 'Book seven', genre: 'History', publish: 1986,
    edition: 1996}];

let userBooks = bookName.filter ( (bk) => bk.genre === 'History')

userBooks = bookName.filter ( (bk) => {
    return bk.publish >= 1996 && bk.genre === "History"
})

console.log(userBooks);


