import { Animal } from "./animal";

export class Dog extends Animal{

    constructor(name: string, weigth: number){
        super(name, weigth)
    }

    bark(): void{
        console.log("au au 🐶")
    }
}