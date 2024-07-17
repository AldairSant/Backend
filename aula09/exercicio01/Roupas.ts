import { Produtos } from "./Produtos";

class Roupas implements Produtos {

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

    informações(): void{
        console.log(`${this.nome}\n${this.preço}\n${this.tipo}\n${this.peso}`)
    }
    
}

const calça = new Roupas('Calça', 119, 'Jeans', 0.500)

calça.informações()