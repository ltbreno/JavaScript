class Carro {
    marca ;
    cor ; 
    gastomedio ;
    constructor(marca,cor,gastomedio) {
        this.marca = marca ;
        this.cor = cor ;
        this.gastomedio = gastomedio ;
    }
    calcularGasto(distancia,precoCombustivel) {
        return distancia * this.gastomedio * precoCombustivel  ;
    }
}
const audi = new Carro('Audi','Preto',1/12);
const bmw = new Carro('bmw','Preto', 1/10);
console.log(bmw.calcularGasto(70,5));