import { Pai } from "./Pai";

export class Filho extends Pai{

    corCabelo:string

    constructor(nome:string, peso: number, corCabelo:string){
        super(nome, peso)
        this.corCabelo = this.corCabelo
    }

    correr(){
        console.log(`${this.nome} está correndo`)
    }

    pular(){
        console.log(`${this.nome} está pulando`)
    }

}

const pessoa2 = new Filho('Joaquim', 70, 'preto')
pessoa2.andar()
pessoa2.pular()
pessoa2.correr()