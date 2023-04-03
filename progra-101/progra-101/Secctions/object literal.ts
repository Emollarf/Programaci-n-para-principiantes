

//OBJETO LITERAL

export let person ={
    name:'melisa',
    age: 30,
    isActive: true,
    hobbies: ['soccer', 'tennis', 'f1'],
    toString(){
        let objectString = this.name + ' tiene '+this.age
        console.log(objectString)

    }
}

console.log(person.toString()); // error tiene un undefined
person.toString();

console.log(person.name.toUpperCase())


let car= {
    doors:5,
    brand:'Seat',
    colour:'Blanco',
    year:2023,
    gearBox:'manual'

}

let smartTV= {
    sizesInches: 65,
    brand: 'philips',
    year: 2020,
    type: 'Led',
    dolbyAtmos: true,

}

let youtubeVideo= {
    timeMin: 7,
    youtuber:'Fernando',
    tematica:'Programación',
    comments:['buen video', 'No me gusto'],
    likes:1500
}

console.log(car);
console.log(smartTV);
console.log(youtubeVideo);