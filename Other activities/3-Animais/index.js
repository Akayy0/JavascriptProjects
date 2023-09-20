// herança de classes

class Animal {
    constructor(especie) {
        this.especie = especie;
    }
}


class Dog extends Animal {
    constructor(especie, raca){
        super(especie);
        this.raca = raca;
    }


    infoA(){
        console.log(`Seu animal e da especie ${this.especie}, tendo a raca: ${this.raca}`);
    }

}

class Cat extends Animal {
    constructor(especie, pelagem){
        super(especie);
        this.pelagem = pelagem;
    }


    infoB(){
        console.log(`Seu animal e da especie ${this.especie}, tendo a raca: ${this.pelagem}`);
    }

}

const Pingo = new Dog("Cachorro", "Vira-lata");

const Garfield = new Cat("Gato", "Rajado");

console.log(Pingo);
console.log(Garfield);

Pingo.infoA();
Garfield.infoB();