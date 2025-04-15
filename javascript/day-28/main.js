// "use strict";
// console.log(this)

// const myObj = {
//     name:"Suraj",
//     age:20,
//     isProgrammer:true,
//     sayHello:function(){
//         console.log("Hello" , this.name)
//     }
// }

// myObj.sayHello();


// function sayHello(){
//     console.log(this) // global object , if in stric mode then showing me undefined
// }

// sayHello();

// const Add = ()=>{
//     console.log(this) 
// }

// Add();

// const person = {
//     name: "Alice",
//     greet(){
//       console.log(`Hello, my name is ${this.name}`);
//     },
//   };
  
//   person.greet(); // Output: Hello, my name is undefined


  function Person(name) {
    this.name = name;
  }
  
  const person1 = new Person("Alice");
  console.log(person1.name); // Output: Alice