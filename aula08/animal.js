"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, weigth) {
        this.name = name,
            this.weigth = weigth;
    }
    Animal.prototype.eat = function (quantity) {
        console.log("The animal has eaten ".concat(quantity, "g of food."));
    };
    return Animal;
}());
exports.Animal = Animal;
