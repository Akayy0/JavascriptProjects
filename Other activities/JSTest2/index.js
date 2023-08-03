class account {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo || 0;
    }

    deposit(value){

        this.saldo += value
        console.log(`Voce depositou ${value}, saldo atual e de: ${this.saldo}`);
    }

    withdraw(value){
        if(value > 500){

            let taxa = value * 0.05;
            this.saldo -= taxa
            value -= taxa;
            console.log(`Foi cobrado uma taxa de 5% no seu saque no valor de ${taxa}`);
        }

        if (value > this.saldo){
            console.log('Saldo insuficiente');
            return;
        }

        this.saldo -= value;
        console.log(`Saque de ${value} realizado. Saldo atual de ${this.saldo}`);
    }

}

const Account1 = new account('Joao', 0);


Account1.deposit(1000)

console.log(Account1);

Account1.withdraw(800)

