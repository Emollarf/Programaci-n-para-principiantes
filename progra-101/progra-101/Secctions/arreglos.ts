
export let people:string [] =['Fernando', 'Melisa', 'Eduardo'];
let flowers: string[] = ['1','2','3']
let flowers1:string[]; 

let salaries:number[] = [1500, 2400, 3200];

console.log(people[0]);
/* 
if(people[3] === undefined){
    console.log('No hay persona en posicion [3]')
}else {
    console.log(people[3])
} */

/* 
if(people[2] !== undefined){
    console.log(people[2])
} */

if(people[3]){
    console.log(people[3])
} 

for (let i = 0; i < flowers.length; i++){
    console.log(flowers[i]);
}

/* for(let i=0; i<people.length; i++){
    for(let i=0; i<salaries.length; i++){
   console.log(people[i], salaries[i]);
}}
 */
for(let i=0; i<=people.length-1; i++){
    let name = people[i];
    let salary = salaries[i]; 
    console.log(name, salary);
}

for(let i=0; i<salaries.length; i++){
    let salarie = salaries[i]
    console.log(salarie)
}
