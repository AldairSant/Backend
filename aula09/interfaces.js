var Toyota = /** @class */ (function () {
    function Toyota(model, year) {
        this.model = model,
            this.year = year;
    }
    Toyota.prototype.startEngine = function () {
        console.log("Engine has started");
    };
    return Toyota;
}());
var carrinho = new Toyota('Corolla', 2024);
carrinho.startEngine();
