class User{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password    
    }
}

const suraj = new User("Suraj" , "6KQo5@example.com" , "12345")
const karan = new User("Karan" , "6KQo5@example.com" , "12345")
const akash = new User("Akash" , "6KQo5@example.com" , "12345")

class Car{
    constructor(model , make , year){
        this.model = model;
        this.make = make;
        this.year = year
    }

    start(){
        console.log("Starting the car")
    }

    stop(){
        console.log("Stopping the car")
    }

    break(){
        console.log("Breaking the car")
    }
}

const car1 = new Car("Mustang" , "Ford" , 2022)
const car2 = new Car("Camry" , "Toyota" , 2022)
const car3 = new Car("Prius" , "Toyota" , 2022)

