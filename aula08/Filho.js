"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filho = void 0;
var Pai_1 = require("./Pai");
var Filho = /** @class */ (function (_super) {
    __extends(Filho, _super);
    function Filho(nome, peso, corCabelo) {
        var _this = _super.call(this, nome, peso) || this;
        _this.corCabelo = _this.corCabelo;
        return _this;
    }
    Filho.prototype.correr = function () {
        console.log("".concat(this.nome, " est\u00E1 correndo"));
    };
    Filho.prototype.pular = function () {
        console.log("".concat(this.nome, " est\u00E1 pulando"));
    };
    return Filho;
}(Pai_1.Pai));
exports.Filho = Filho;
var pessoa2 = new Filho('Joaquim', 70, 'preto');
pessoa2.andar();
pessoa2.pular();
pessoa2.correr();
