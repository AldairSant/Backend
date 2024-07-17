export class Pai{

    nome: string
    peso: number

    constructor(nome: string, peso: number){
        this.nome = nome,
        this.peso = peso
    }

    andar(){
        console.log(`${this.nome} está andando.`)
    }

}

const pessoa1 = new Pai("José", 85)

pessoa1.andar()