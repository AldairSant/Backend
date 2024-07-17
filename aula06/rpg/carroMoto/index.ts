import { Carro } from "./carro";
import { Moto } from "./moto";
//import { Moto } from "./moto";

const carro1 = new Carro('Ford', 'Fiesta', 'vermelho', 2010, 120)
const moto1 = new Moto('BMW', 'GS1200', 'azul', 1995, 90)

carro1.setVelocidade(99)
carro1.getVelocidade()
carro1.buzinar(moto1)

moto1.setAno(1234)
moto1.getAno()

moto1.buzinar(carro1)