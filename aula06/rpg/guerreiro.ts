import { Monstro } from "./monstro"
import { atualizarSaude } from "../rpg"

export class Guerreiro {
    nome:string
    tipo:string
    forca:number
    saude:number

    constructor(nome:string, tipo:string, forca:number){
        this.nome = nome,
        this.tipo = tipo,
        this.forca = forca,
        this.saude = 100
    }

    atacar(oponente:Monstro):void{
        console.log(`${this.nome} atacou ${oponente.nome}!`)
        oponente.defender(this.forca)
    }

    defender(dano:number):void{
        this.saude -= dano
        console.log(`${this.nome} sofreu ${dano} de dano.`)
        atualizarSaude(this.nome, this.saude)
    }
}