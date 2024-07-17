interface Car { // interface obriga a todas as classes que utilizam essa interface a ter todos atributos e metodos delas
    model: string
    year: number
    startEngine(): void
}

class Toyota implements Car {

    model: string
    year: number

    constructor(model: string, year: number) {
        this.model = model,
        this.year = year
    }

    startEngine(): void {
        console.log("Engine has started")
    }
}

const carrinho = new Toyota('Corolla', 2024)

carrinho.startEngine()