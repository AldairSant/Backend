import { Guerreiro } from "./guerreiro"
import { atualizarSaude } from "../rpg"

export class Monstro{
    nome:string
    forca:number
    saude:number

    constructor(nome:string){
        this.nome = nome,
        this.forca = 50,
        this.saude = 10
    }

    atacar(oponente:Guerreiro):void{
        console.log(`${this.nome} atacou ${oponente.nome}!`)
        oponente.defender(this.forca)
    }

    defender(dano:number):void{
        this.saude -= dano
        console.log(`${this.nome} sofreu ${dano} de dano.`)
        atualizarSaude(this.nome, this.saude)
    }
}