import { Person } from ".";

class Father extends Person {
    falar(): void {
        console.log( "This is the father.");
        this.howManyChildren()
    }
}

const pai = new Person(4)
pai.howManyChildren()