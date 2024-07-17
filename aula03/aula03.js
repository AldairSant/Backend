// 1. Número Positivo ou Negativo: Solicite um número do usuário e, em seguida, determine se o número é positivo, negativo ou igual a zero. Exiba a mensagem correspondente.

const readlineSync = require('readline-sync')

/* const num = readlineSync.question("Digite um numero: ")

if(num > 0){
    console.log("O numero digitado é POSITIVO.")
} else if(num < 0){
    console.log("O numero digitado é NEGATIVO.")
} else{
    console.log("O numero digitado é ZERO.")
} */

// 2. Login Simples: Crie uma variável com uma senha (por exemplo, "1234"). Solicite ao usuário que insira uma senha e verifique se a senha inserida corresponde à senha armazenada. Exiba uma mensagem de "Login bem-sucedido" ou "Senha incorreta".

/* const senha = 1234

const pw = readlineSync.questionInt("Digite sua senha: ")

if(senha === pw){
    console.log("Acesso permitido!")
} else{
    console.log("Acesso negado!")
} */

// 3. Calculadora Básica: Solicite ao usuário dois números e uma operação (por exemplo, +, -, *, /). Use if e else para executar a operação escolhida e exibir o resultado.

/* const num1 = readlineSync.questionFloat("Digite um numero: ")
const operacao = readlineSync.question(" +, -, *, / ? ")
const num2 = readlineSync.questionFloat("Digite um numero: ")

if(operacao === '+'){
    console.log(num1 + num2)
}else if(operacao === '-'){
    console.log(num1 - num2)
} else if(operacao === '*'){
    console.log(num1 * num2)
} else if(operacao === '/'){
    console.log(num1 / num2)
} */

// 4. Maior de Três Números: Peça ao usuário para inserir três números e use if e else para determinar qual é o maior dos três. Em seguida, exiba o número maior.
/* const n1 = readlineSync.questionFloat("Digite um numero: ")
const n2 = readlineSync.questionFloat("Digite um numero: ")
const n3 = readlineSync.questionFloat("Digite um numero: ")

if(n1 > n2 && n1 > n3){
    console.log("O primeiro numero é o maior")
} else if(n2 > n1 && n2 > n3){
    console.log("O segundo numero é o maior")
} else if(n3 > n1 && n3 > n2){
    console.log("O terceiro numero é o maior")
} else{
    console.log("Dois ou mais numeros são iguais!")
} */

// 6. Escreva um programa que conte de 1 a 10 e, para cada número, exiba o resultado da multiplicação desse número por 5. 


/* for(let i = 1; i <= 10; i++){
    console.log(i * 5)
} */

// 7. Crie um programa que gere a tabela de multiplicação de um número específico fornecido pelo usuário, indo de 1 a 10.

const numero = readlineSync.question("Digite um numero: ")

for(let i = 1; i <= 10; i++){
    console.log(i * numero)
}