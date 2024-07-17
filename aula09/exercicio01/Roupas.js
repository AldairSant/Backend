"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Roupas = /** @class */ (function () {
    function Roupas(tipo, preço, nome, peso) {
        this.tipo = tipo,
            this.preço = preço,
            this.nome = nome,
            this.peso = peso;
    }
    Roupas.prototype.informações = function () {
        console.log("".concat(this.nome, "\n").concat(this.preço, "\n").concat(this.tipo, "\n").concat(this.peso));
    };
    return Roupas;
}());
var calça = new Roupas('Calça', 119, 'Jeans', 0.500);
calça.informações();
