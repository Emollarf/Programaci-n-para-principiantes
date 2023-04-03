

interface Person { 
    name: string;
    age: number;
    isActive: boolean;
   
}

export let fernando:Person ={
    name:'fernando',
    age:36,
    isActive:true,

}

let melissa:Person ={
    name:'Melissa',
    age:30,
    isActive:false,
}

let juan: Person= {
    name: 'Juan',
    age:45,
    isActive: false,
}

let people: Person[] =  [
    fernando, melissa, juan
];

console.log(people)

for ( let i = 0; i< people.length; i++){
    let person = people[i];
    console.log(person.name + ' ' + person.age)
}