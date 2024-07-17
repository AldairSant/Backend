import { Produtos } from "./Produtos";

class Livros implements Produtos {

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

    nomeDoLivro(): void{
        console.log(`O nome deste livro é: ${this.nome}`)
    }
}

const livro1 = new Livros('terror', 59.90, 'It - A Coisa', 1)

livro1.nomeDoLivro()