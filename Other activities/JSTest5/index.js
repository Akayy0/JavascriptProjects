// Polimorfismo

class Veiculo{
    mover(){
        console.log("Veiculo esta se movendo");
    }
}


class Carro extends Veiculo{
    mover(){
        console.log("Carro esta se movendo");
    }
}

class Bicicleta extends Veiculo{
    mover(){
        console.log("Bicicleta esta se movendo");
    }
}

const Veiculo1 = new Veiculo();

const Carro1 = new Carro();

const Bicicleta1 = new Bicicleta();

Veiculo1.mover();

Carro1.mover();

Bicicleta1.mover();