const nome = 'Aldair'
let sobrenome = "Berlese"
let eEstudante = true

console.log(`Meu nome é ${nome} ${sobrenome}`)

console.log(`O usuário ${nome} ${sobrenome} é Estudante? ${eEstudante}`)

const readlineSync = require('readline-sync');

const userName = readlineSync.question('May I have your name? ');
console.log(userName)