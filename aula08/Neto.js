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
var Filho_1 = require("./Filho");
var Neto = /** @class */ (function (_super) {
    __extends(Neto, _super);
    function Neto(nome, peso, corCabelo) {
        return _super.call(this, nome, peso, corCabelo) || this;
    }
    Neto.prototype.engatinhar = function () {
        console.log("".concat(this.nome, " est\u00E1 engatinhando"));
    };
    return Neto;
}(Filho_1.Filho));
var pessoa3 = new Neto('Pedrinho', 8, 'preto');
pessoa3.andar();
pessoa3.correr();
pessoa3.engatinhar();
