import { Guerreiro } from "./guerreiro"
import { Monstro } from "./monstro"


const warrior = new Guerreiro('lutador', 'guerreiro', 2)

const monstro = new Monstro('Lobo Selvagem')

while(monstro.saude > 0 && warrior.saude > 0){
    warrior.atacar(monstro)
    console.log(monstro.saude)
}

//setInterval(warrior.atacar, 2000)

//warrior.atacar(monstro)


export function atualizarSaude(nome:string, saude:number){
    console.log(`${nome} tem ${saude} de vida.`)
}