
const readlineSync = require('readline-sync')

// Exercício 01

/* const nota1 = Number(readlineSync.question("Insira a primeira nota: "))
const nota2 = Number(readlineSync.question("Insira a segunda nota: "))
const nota3 = Number(readlineSync.question("Insira a terceira nota: "))
const media = (nota1 + nota2 + nota3) / 3

console.log(`A média do aluno é ${media}`)
 */
// Exercício 02

/* const num1 = readlineSync.question("Insira um numero: ")
const num2 = readlineSync.question("Insira outro numero: ")
if(num1 > num2){
    console.log('O primeiro numero é maior que o segundo.')
} else if(num1 < num2){
    console.log("O segundo numero é maior que o primeiro.")
} else{
    console.log("Os numeros são iguais")
} */

// Exercício 02
const racasDeCachorro = ['Beagle', 'Pastor Alemão', 'Golden Retriever', 'Labrador', 'Husky']
const escolha = readlineSync.question("Escolha uma raça de 1 a 5:") - 1
console.log(`Voce escolheu ${racasDeCachorro[escolha]}.`)
