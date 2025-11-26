// oop - class >> object

// class Animal {
//     name: string;
//     species: string;
//     sound: string

//     constructor(name: string, species: string, sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound
//     }

//     makeSound(){
//         console.log(this.sound)
//     }
// }

// parameter properties

class Animal {

    constructor(public name: string, public species: string, public sound: string) {
    }

    makeSound() {
        console.log(this.sound)
    }
}


const dog = new Animal('Doges', 'dog', 'bark');
dog.makeSound()
console.log(dog)