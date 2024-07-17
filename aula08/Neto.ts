import { Filho } from "./Filho";

class Neto extends Filho{

    constructor(nome:string, peso:number, corCabelo:string){
    super(nome, peso, corCabelo)
    }

    engatinhar(){
        console.log(`${this.nome} está engatinhando`)
    }

}

const pessoa3 = new Neto('Pedrinho', 8, 'preto')

pessoa3.andar()
pessoa3.correr()
pessoa3.engatinhar()