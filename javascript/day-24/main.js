// const myPromise = new Promise((resolve, reject) => {
// //   resolve({
// //     name: "John",
// //     age: 30,
// //     city: "New York",
// //   });
//     reject("Error: Something went wrong!");
// });

// myPromise.then((value) => {
//   console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Always runs");
// });
// // .then ---> resolve
// // .catch ---> reject
// // .finally ----> always runs

// const chekMyAgePromise = new Promise((resolve, reject) => {
//   let age = 1;
//   if (age >= 18) {
//     resolve("You are an adult");
//   } else {
//     reject("You are not an adult");
//   }
// });


// chekMyAgePromise
// .then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Always runs");
// });

fetch("https://api.github.com/users/aestheticsuraj234")
.then((response)=>{
 return response.json();
})
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
})
.finally(()=>{
  console.log("Always runs");
})