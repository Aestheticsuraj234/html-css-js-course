// var name = "suraj";

// var name = "jha"
// name = "suraj"
// {
//     console.log(name)
// }
// console.log(name)

// let username = "Suraj"

// // let username = 'karan'

// username = "Jhon Doe"

// {
//     console.log(username)
//     let age = 20;
// }

// // console.log(age)

// console.log(username)

// const PI = 3.14;

// // PI = 3.15;
// {
//     console.log(PI)
//     const sin = Math.sin(90);
//     console.log(sin)
// }
// // console.log(sin)
// console.log(PI)

// 2. string interpolation

// let username = "Suraj"

// let greet = `Hello  ${username}`

// console.log(greet)

// *arrow function

// function add(a=10 , b=20){
//     return a + b
// }

// console.log(add())

// const Add = a => a + 10

// console.log(Add(2))

// Destructuring --> object and array

// const Person = {
//     name: "Suraj",
//     age: 20,
//     address: {
//         city: "Noida",
//         state: "U.P"
//     }
// }

// const {name , age , address} = Person;

// const {city , state} = address;

// console.log(name , age , city , state)

// const MyArray = ["Suraj" , "Jhon" , "Saransh"]

// const [elem1 , elem2 , elem3] = MyArray

// console.log(elem1 , elem2 , elem3)

// * Spread and Rest operators (...)

// *Spread
// const myObj1 = {
//   name: "Suraj",
//   age: 20,
// };

// const myObj2 = {
//   address: {
//     city: "Noida",
//     state: "U.P",
//   },
// };

// const myObj3 = {
//     ...myObj1,
//     ...myObj2,
//     profression: "Software Developer",
//     greet: function () {
//         console.log("Hello");
//     },

// }

// console.log(myObj3)

// const arr1 = [1, 2, 3];

// const arr2 = [...arr1 , 4 , 5];

// console.log(arr2)

// function add(...data){
//     return data.reduce((acc , curr)=>{
//         return acc + curr
//     } , 0)
// }

// console.log(add(1 , 2 , 3 , 4 , 5 ,10 , 234 , 34 ,56))

// const users = new Map();
// users.set(1, "Alice");
// users.set(2, "Bob");

// console.log(users.get(1)); // Alice

// console.log(users)

// const numbers = new Set([1, 2, 3, 3, 4]);
// console.log(numbers); // Set {1, 2, 3, 4}

// const colors = ["red", "green", "blue"];

// for (const color of colors) {
//   console.log(color);
// }

// const user = { profile: { name: "Alice" } };
// console.log(user.profile.name); // Alice
// console.log(user.address?.city); 


const user = {NAME:"SURAJ"};
console.log(user ?? "Guest"); // Guest

