"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pai = void 0;
var Pai = /** @class */ (function () {
    function Pai(nome, peso) {
        this.nome = nome,
            this.peso = peso;
    }
    Pai.prototype.andar = function () {
        console.log("".concat(this.nome, " est\u00E1 andando."));
    };
    return Pai;
}());
exports.Pai = Pai;
var pessoa1 = new Pai("José", 85);
pessoa1.andar();
