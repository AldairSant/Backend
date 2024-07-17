"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livros = /** @class */ (function () {
    function Livros(tipo, preço, nome, peso) {
        this.tipo = tipo,
            this.preço = preço,
            this.nome = nome,
            this.peso = peso;
    }
    Livros.prototype.nomeDoLivro = function () {
        console.log("O nome deste livro \u00E9: ".concat(this.nome));
    };
    return Livros;
}());
var livro1 = new Livros('terror', 59.90, 'It - A Coisa', 1);
livro1.nomeDoLivro();
