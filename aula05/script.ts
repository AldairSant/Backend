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
class Coruja{
    nome:string
    peso:number
    raca:string
    idade:number

    constructor(nome:string, peso:number, raca:string, idade:number){
    this.nome = nome,
    this.peso = peso,
    this.raca = raca,
    this.idade = idade
    }

    chirriar():void{
        console.log(`${this.nome} está chirriando.`)
    }

    voar():void{
        console.log(`${this.nome} está voando.`)
    }

    informacoes():void{
        console.log(`Nome: ${this.nome}\nPeso: ${this.peso} Kgs\nRaça: ${this.raca}\nIdade: ${this.idade} anos.`)
    }
}

const coruja1:Coruja = new Coruja('Coruja 1', 5, 'Caburé', 3)

coruja1.chirriar()
coruja1.voar()
coruja1.informacoes()