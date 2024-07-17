import { Carro } from "./carro"

export class Moto{
    private marca:string
    private modelo:string
    private cor:string
    private ano:number
    private velocidade:number

    constructor(marca:string, modelo:string, cor:string, ano:number, velocidade:number){
        this.marca = marca,
        this.modelo = modelo,
        this.cor = cor,
        this.ano = ano,
        this.velocidade = velocidade
    }

    setVelocidade(novaVelocidade:number){
        if(this.velocidade > 0){
            this.velocidade = novaVelocidade
        } else{
            console.log("valor inválido!")
        }
    }

    getVelocidade(){
        console.log(this.velocidade)
        return this.velocidade
    }

    setModelo(novoModelo:string){
        if(novoModelo.length > 0){
            this.modelo = novoModelo
        } else{
            console.log("valor inválido!")
        }
    }
    getModelo(){
        console.log(this.modelo)
        return this.modelo
    }

    setMarca(novaMarca:string){
        if(this.marca.length > 0){
            this.marca = novaMarca
        } else {
            console.log("dado inválido!")
        }
    }
    getMarca(){
        console.log(this.marca)
        return this.marca
    }

    setCor(novaCor:string){
        if(this.cor.length > 0 && typeof(novaCor) === 'string'){
            this.cor = novaCor
        } else{
            console.log("dado inválido!")
        }
    }

    setAno(novoAno:number){
        if(this.ano > 0) {
            this.ano = novoAno
        } else{
            console.log("erro")
        }
    }
    getAno(){
        console.log(this.ano)
        return this.ano
    }


    buzinar(carro:Carro){
        console.log(`${this.modelo} buzinou pelo ${carro.getModelo()}`)
    }

    infoAno(carro:Carro){
        console.log(`${carro.getModelo()} pediu info do ano deste ${this.modelo}: ${this.ano}`)
    }
    infoCor(carro:Carro){
        console.log(`${carro.getModelo()} requisitou a cor deste ${this.modelo}: ${this.cor}`)
    }

}