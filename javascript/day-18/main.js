// let myarray = [90,32,45,67,45 , [12,133,45]]


// console.log(myarray[5][0]) // 45

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// // console.log(typeof fruits)


// const numbers = [1, 2, 3, 4, 5];

// let res = numbers.pop();

// console.log(res)

// numbers.push(6);
// console.log(numbers)



// console.log(numbers.length)

// let fruits = ["🍌", "🍊", "🍎", "🥭"];


// let res = fruits.slice(0 , 3)
// console.log(res)

// console.log(fruits)


// splice

// 1. adding

// vegies.splice(5 , 0 , "🥔" , "🍠")

// console.log(vegies)

// 2. removing

// vegies.splice(2 , 3)

// console.log(vegies)

// let vegies = ["🥦", "🥒", "🥕", "🍅" , "🫛" ];

// // 3. replacing
// vegies.splice(0 , 1 , "🍄‍🟫")

// console.log(vegies)


// let fruits = ["apple", "banana"];
// let moreFruits = ["cherry", "date"];
// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits); // ["apple", "banana", "cherry", "date"]


// let vehicles = ["🚗", "🚕", "🚙", "🚎", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜"];

// console.log(vehicles.indexOf("🚵🏻"))

// let tools = ["🪨", "🪵", "🪣", "✂️"];

// console.log(tools.includes("🔨"))

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let newArray = numbers.map((currrentElement , index , array)=>{
//    return currrentElement * 2
// })

// console.log(newArray)


// foreach

// numbers.forEach((currentElement , index , array)=>{
// //    never return anything

// })

// let number = [12 , 34 , 56 , 78 ,12 , 45 , 67 , 89 , 90]

// const even = number.filter((currentElement , index , array)=>{
//     return currentElement % 2 === 0;
// })

// console.log(even)


let array = [1 , 2 , 3 , 4 , 5]

let total = array.reduce((accumulator , currentElement , index , array)=>{
    return accumulator + currentElement
} , 0)

// acc = 0
// curr = 1
// total = 0 + 1 = 1;

// acc = 1;
// curr = 2;
// total = 1 + 2 = 3;

// acc = 3;
// curr = 3;
// total = 3 + 3 = 6;

// acc = 6;
// curr = 4;
// total = 6 + 4 = 10;

// acc = 10;
// curr = 5;

// total = 10 + 5 = 15;
console.log(total)