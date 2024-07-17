import { Produtos } from "./Produtos"

class Eletrodomestico implements Produtos {

    tipo: string
    preço: number
    nome: string
    peso: number
    
    constructor(tipo: string, preço: number, nome:string, peso: number){
        this.tipo = tipo,
        this.preço = preço,
        this.nome = nome,
        this.peso = peso
    }

    abrirPorta(): void{
        console.log(`Este ${this.nome} abriu a porta.`)
    }

}

const microondas = new Eletrodomestico('eletrodomestico', 599, 'Microondas', 15)
microondas.abrirPorta()