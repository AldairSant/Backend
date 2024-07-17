"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, cor, ano, velocidade) {
        this.marca = marca,
            this.modelo = modelo,
            this.cor = cor,
            this.ano = ano,
            this.velocidade = velocidade;
    }
    Moto.prototype.setVelocidade = function (novaVelocidade) {
        if (this.velocidade > 0) {
            this.velocidade = novaVelocidade;
        }
        else {
            console.log("valor inválido!");
        }
    };
    Moto.prototype.getVelocidade = function () {
        console.log(this.velocidade);
        return this.velocidade;
    };
    Moto.prototype.setModelo = function (novoModelo) {
        if (novoModelo.length > 0) {
            this.modelo = novoModelo;
        }
        else {
            console.log("valor inválido!");
        }
    };
    Moto.prototype.getModelo = function () {
        console.log(this.modelo);
        return this.modelo;
    };
    Moto.prototype.setMarca = function (novaMarca) {
        if (this.marca.length > 0) {
            this.marca = novaMarca;
        }
        else {
            console.log("dado inválido!");
        }
    };
    Moto.prototype.getMarca = function () {
        console.log(this.marca);
        return this.marca;
    };
    Moto.prototype.setCor = function (novaCor) {
        if (this.cor.length > 0 && typeof (novaCor) === 'string') {
            this.cor = novaCor;
        }
        else {
            console.log("dado inválido!");
        }
    };
    Moto.prototype.setAno = function (novoAno) {
        if (this.ano > 0) {
            this.ano = novoAno;
        }
        else {
            console.log("erro");
        }
    };
    Moto.prototype.getAno = function () {
        console.log(this.ano);
        return this.ano;
    };
    Moto.prototype.buzinar = function (carro) {
        console.log("".concat(this.modelo, " buzinou pelo ").concat(carro.getModelo()));
    };
    Moto.prototype.infoAno = function (carro) {
        console.log("".concat(carro.getModelo(), " pediu info do ano deste ").concat(this.modelo, ": ").concat(this.ano));
    };
    Moto.prototype.infoCor = function (carro) {
        console.log("".concat(carro.getModelo(), " requisitou a cor deste ").concat(this.modelo, ": ").concat(this.cor));
    };
    return Moto;
}());
exports.Moto = Moto;
