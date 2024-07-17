"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eletrodomestico = /** @class */ (function () {
    function Eletrodomestico(tipo, preço, nome, peso) {
        this.tipo = tipo,
            this.preço = preço,
            this.nome = nome,
            this.peso = peso;
    }
    Eletrodomestico.prototype.abrirPorta = function () {
        console.log("Este ".concat(this.nome, " abriu a porta."));
    };
    Eletrodomestico.prototype.info = function () {
        console.log('nao deu certo');
    };
    return Eletrodomestico;
}());
var microondas = new Eletrodomestico('eletrodomestico', 599, 'Microondas', 15);
microondas.abrirPorta();
microondas.info();
