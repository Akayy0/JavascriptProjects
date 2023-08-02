
class Dog {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    latir(){
        if (this.age < 14) {
            console.log(`O Cachorro ${this.name} que tem ${this.age} anos, esta latindo`);     
        } else {
            console.log(`O Velho Cachorro ${this.name} que tem ${this.age} anos, esta latindo`);
        }
        
    }
}

const Pingo = new Dog('Pingo', 7);
const Denis = new Dog('Denis', 8);
const Roger = new Dog('Roger', 11);
const Astolfo = new Dog('Astolfo', 15);
const Jeremias = new Dog('Jeremias', 4);
const Pablo = new Dog('Pablo', 2);


console.log(Pingo,Denis,Roger,Astolfo,Jeremias,Pablo);

Astolfo.latir();