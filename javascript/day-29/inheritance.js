class Animals{
    constructor(name){
        this.name = name
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    sleep(){
        console.log(`${this.name} is sleeping`);
    }

    walk(){
        console.log(`${this.name} is walking`);
    }

    run(){
        console.log(`${this.name} is running`);
    }
}

// const Horse = new Animals("Horse");
class Horse extends Animals{
    constructor(name , sound){
        super(name);
        this.sound = sound  
    }

    makeSound (){
        console.log(this.sound);
    }
}

const Horse1 = new Horse("Horse" , "Neigh");

Horse1.eat();
Horse1.sleep();
Horse1.walk();
Horse1.run();
Horse1.makeSound();

console.log(Horse === Animals)
console.log(Horse.prototype === Animals.prototype)

console.log(Horse1 instanceof Horse)