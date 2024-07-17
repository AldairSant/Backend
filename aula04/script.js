"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reader = require("readline-sync");
/* let nome:string = 'Aldair'

console.log(nome)

const idade:number = 33

const isStudent:boolean = true

console.log(`${nome} de ${idade}, é estudante? ${isStudent}`)

nome = 'Pedro'

console.log(nome)
 */
function podeDirigir(nome, idade, temCnh) {
    if (temCnh === true && idade >= 18)
        console.log("".concat(nome, " de ").concat(idade, " anos pode dirigir."));
    else
        console.log("".concat(nome, " de ").concat(idade, " anos n\u00E3o pode dirigir."));
}
var myName = reader.question("Digite seu nome: ");
var myIdade = reader.question("Digite sua Idade: ");
var cnh = reader.question("Voce possui CNH? Y/N").toUpperCase();
var temCnh = false;
while (cnh != 'Y' && cnh != 'N') {
    console.log(cnh);
    cnh = reader.question("Voce possui CNH? Y/N").toUpperCase();
}
cnh === 'Y' ? temCnh = true : temCnh = false;
podeDirigir(myName, myIdade, temCnh);
