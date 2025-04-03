// function mySyncFunction(){
//     console.log("This is my sync function")
//       console.log("I am called")
//   console.log("I am called")
// }

// console.log("Before calling sync function")
// mySyncFunction();
// console.log("After calling sync function")

// function myAsyncFunction(){
//     console.log("This is my async function")
    setTimeout(() => {
            console.log("Hello world")
    }, 3000);

// }


// console.log("Before calling async function")
// myAsyncFunction();
// console.log("After calling async function")

function Parent(){
    return function Child(){
        console.log("Child is called")
    }
}

const child = Parent();
child();

// 1. function ke under function
// 2. function ko as a parameter accept krna