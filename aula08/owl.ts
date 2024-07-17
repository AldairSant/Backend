import { Animal } from "./animal";

export class Owl extends Animal{

    constructor(name: string, weigth: number){
        super(name, weigth)
    }

    fly(): void{
        console.log("The owl is flying!")
    }

}

const newOwl = new Owl('hoot hoot', 6)

newOwl.fly()
newOwl.eat(14)