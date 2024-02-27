class Veiculo {
    mover(): void {
        console.log("Veiculo está se movendo");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("Carro está se movendo");
    }
}

class Bicicleta extends Veiculo {
    mover(): void {
        console.log("Bicicleta está se movendo");
    }
}

const Veiculo1 = new Veiculo();
const Carro1 = new Carro();
const Bicicleta1 = new Bicicleta();

Veiculo1.mover();
Carro1.mover();
Bicicleta1.mover();