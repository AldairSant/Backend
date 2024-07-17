"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, cor, ano, velocidade) {
        this.marca = marca,
            this.modelo = modelo,
            this.cor = cor,
            this.ano = ano,
            this.velocidade = velocidade;
    }
    Carro.prototype.setVelocidade = function (novaVelocidade) {
        if (this.velocidade > 0) {
            this.velocidade = novaVelocidade;
        }
        else {
            console.log("valor inválido!");
        }
    };
    Carro.prototype.getVelocidade = function () {
        console.log(this.velocidade);
        return this.velocidade;
    };
    Carro.prototype.setModelo = function (novoModelo) {
        if (novoModelo.length > 0) {
            this.modelo = novoModelo;
        }
        else {
            console.log("valor inválido!");
        }
    };
    Carro.prototype.getModelo = function () {
        console.log(this.modelo);
        return this.modelo;
    };
    Carro.prototype.setMarca = function (novaMarca) {
        if (this.marca.length > 0) {
            this.marca = novaMarca;
        }
        else {
            console.log("dado inválido!");
        }
    };
    Carro.prototype.getMarca = function () {
        console.log(this.marca);
        return this.marca;
    };
    Carro.prototype.setCor = function (novaCor) {
        if (this.cor.length > 0 && typeof (novaCor) === 'string') {
            this.cor = novaCor;
        }
        else {
            console.log("dado inválido!");
        }
    };
    Carro.prototype.setAno = function (novoAno) {
        if (this.ano > 0) {
            this.ano = novoAno;
        }
        else {
            console.log("erro");
        }
    };
    Carro.prototype.getAno = function () {
        console.log(this.ano);
        return this.ano;
    };
    Carro.prototype.buzinar = function (moto) {
        console.log("".concat(this.modelo, " buzinou pela ").concat(moto.getModelo()));
    };
    Carro.prototype.infoAno = function (moto) {
        console.log("".concat(moto.getModelo(), " pediu info do ano deste ").concat(this.modelo, ": ").concat(this.ano));
    };
    Carro.prototype.infoCor = function (moto) {
        console.log("".concat(moto.getModelo(), " requisitou a cor deste ").concat(this.modelo, ": ").concat(this.cor));
    };
    return Carro;
}());
exports.Carro = Carro;
