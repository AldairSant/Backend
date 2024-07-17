
import * as reader from 'readline-sync'

/* let nome:string = 'Aldair'

console.log(nome)

const idade:number = 33

const isStudent:boolean = true

console.log(`${nome} de ${idade}, é estudante? ${isStudent}`)

nome = 'Pedro'

console.log(nome)
 */
function podeDirigir(nome:string, idade:number,temCnh:boolean):void{
    if(temCnh === true && idade >= 18)
        console.log(`${nome} de ${idade} anos pode dirigir.`)
    else
        console.log(`${nome} de ${idade} anos não pode dirigir.`)
}

const myName:string = reader.question("Digite seu nome: ")
const myIdade:number = reader.question("Digite sua Idade: ")

let cnh:string = reader.question("Voce possui CNH? Y/N").toUpperCase()
let temCnh:boolean = false
while(cnh != 'Y' && cnh != 'N'){
    console.log(cnh)
    cnh = reader.question("Voce possui CNH? Y/N").toUpperCase()
}
cnh === 'Y' ? temCnh = true : temCnh = false

podeDirigir(myName, myIdade, temCnh)