
//const tinderUser = new Object(); //singleton object

const tinderUser1 = {} //non-singleton object

tinderUser1.id = "123abc"
tinderUser1.name = "sandy"
tinderUser1.isLoggedIn = false

console.log(tinderUser1);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mona",
            lastname: "Lisa"
        }
    }

}

console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);
console.log(regularUser);


const obj1 ={1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const users = [
{
    id: 1,
    emails: "h@gmail.com"
},
{
    id: 1,
    emails: "h@gmail.com"
}
]
users[1].email
console.log(tinderUser1);
console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course //object re-structure

//console.log(courseInstructor);
console.log(instructor);

const navbar = () => {
    
}











