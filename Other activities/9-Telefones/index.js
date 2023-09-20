class Contato{
    constructor(nome,email){
        this.nome = nome;
        this.email = email;
        this.numeros = [];
    }

    addTelefone(numero){
        const i = numero

        this.numeros.push(i);

    }

    toString(){
        return `Nome: ${this.nome}, Email: ${this.email}, Numeros: [${this.numeros.join(", ")}]`;
    }

    
}

const Contato1 = new Contato('Joao','joao@teste.com');

Contato1.addTelefone(987009651)
Contato1.addTelefone(987554215)
Contato1.addTelefone(985442100)

console.log(Contato1.toString());