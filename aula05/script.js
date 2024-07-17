/* class Cachorro {
    nome:string
    peso:number
    pelagem:string
    raca:string

    constructor(nome:string, peso:number, pelagem:string, raca:string){
        this.nome = nome,
        this.peso = peso,
        this.pelagem = pelagem,
        this.raca = raca
    }

    latir():void {
        console.log(`${this.nome} está latindo!`)
    }
}

const boris:Cachorro = new Cachorro('boris', 15, 'marrom', 'Golden')
console.log(boris)
boris.latir()
 */
var Coruja = /** @class */ (function () {
    function Coruja(nome, peso, raca, idade) {
        this.nome = nome,
            this.peso = peso,
            this.raca = raca,
            this.idade = idade;
    }
    Coruja.prototype.chirriar = function () {
        console.log("".concat(this.nome, " est\u00E1 chirriando."));
    };
    Coruja.prototype.voar = function () {
        console.log("".concat(this.nome, " est\u00E1 voando."));
    };
    Coruja.prototype.informacoes = function () {
        console.log("Nome: ".concat(this.nome, "\nPeso: ").concat(this.peso, " Kgs\nRa\u00E7a: ").concat(this.raca, "\nIdade: ").concat(this.idade, " anos."));
    };
    return Coruja;
}());
var coruja1 = new Coruja('Coruja 1', 5, 'Caburé', 3);
coruja1.chirriar();
coruja1.voar();
coruja1.informacoes();
