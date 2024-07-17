import { MetodosDePagamento } from "./MetodosDePagamento";
import * as reader from 'readline-sync'

export class CartaoDeCredito implements MetodosDePagamento{

    bandeira: string

    constructor(bandeira: string){
        this.bandeira = bandeira
    }

    pagar(valorTotal: number): boolean {

        let option: number = 0
        let pgtoEfetuado = false
        while(option != 1 && option != 2){
            
            console.log('------ Finalização de Pagamento -------')
            console.log(`Total a pagar R$${valorTotal.toFixed(2)}.`)
            console.log("Finalizar pagamento?")
            console.log('1 - Pagar')
            console.log('2 - Voltar')
            option = Number(reader.question('Opcao: '))
            console.log('---------------------------------------')
            if(option == 1)
                pgtoEfetuado = true
            if(option == 2)
                pgtoEfetuado = false
        }
    return pgtoEfetuado
    }

}