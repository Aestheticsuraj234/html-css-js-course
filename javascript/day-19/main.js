const Obj1 = {
    name: 'John',
    age: 25,
    isProgrammer: true,
    greet:function(){
        console.log("Hello")
    }
}

const obj2 = {
    address:{
        city: 'Noida',
        state: 'U.P',
    }
}

const obj3 = {
    profression: 'Software Developer'
}

const newObj = Object.assign(Obj1, obj2, obj3);
console.log(newObj);

// console.log(Object.keys(Obj1))
// console.log(Object.values(Obj1))

// console.log(Object.entries(Obj1)) 

// console.log(Obj1.hasOwnProperty("profression"))

// console.log(Obj1["greet"]())

// console.log(Obj1.age);
// console.log(Obj1.greet());

// Obj1.country = "INDIA";
// delete Obj1.age;
// console.log(Obj1);