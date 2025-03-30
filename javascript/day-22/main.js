// const button = document.getElementsByTagName("button")[0];

// // button.onclick = function (){
// //     let username = prompt("Enter Your Username?")

// //     console.log(username)
// // }


// button.addEventListener("click" , (event)=>{
//     console.log(event)
//     alert("You have clicked on a button")
// } , false)

const parent1 = document.getElementById("parent1")
const child1 = document.getElementById("child1")


child1.addEventListener("click" , (event)=>{
    event.stopPropagation()
    console.log("child1 is clicked")
} , false)

parent1.addEventListener("click" , (event)=>{
   event.preventDefault()
    console.log("parent1 is clicked")
} , false)