// Encapsulamento
class Carro{
    constructor(marca, modelo, ano){
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
        this._ligado = false;
        this._Km = 0;

    }


    ligar(){
        this._ligado = true;
        console.log(`O Carro: ${this._modelo} foi ligado`);
    }

    desligar(){
        this._ligado = false;
        console.log(`O Carro: ${this._modelo} foi desligado`);
    }

    rodar(distancia){
        if(this._ligado){
            this._Km += distancia;
            console.log(`Foi percorrido ${distancia} km, valor total de kilometragem e: ${this._Km} km`);
        }else{
            console.log("O Carro esta desligado");
        }
    }

    get Marca(){
        return this._marca;
    }

    get Modelo(){
        return this._modelo;
    }

    get Ano(){
        return this._ano;
    }

    get Km(){
        return this._Km;
    }

    isLigado(){
        return this._ligado;
    }



    setMarca(novaMarca){
        this._marca = novaMarca;
    }

    setModelo(novoModelo) {
        this._modelo = novoModelo
    }

    setAno(novoAno) {
        this._ano = novoAno
    }


}


const Carro1 = new Carro("Tesla","ModelX", 2017);

Carro1.ligar();
Carro1.rodar(500);
Carro1.desligar();

console.log(Carro1.Marca);
console.log(Carro1.Modelo);
console.log(Carro1.Ano);
console.log(Carro1.Km);

Carro1.setMarca("Fiat")
console.log(Carro1.Marca);

Carro1.setModelo("Uno")
console.log(Carro1.Modelo);

Carro1.setAno(2008)
console.log(Carro1.Ano);





