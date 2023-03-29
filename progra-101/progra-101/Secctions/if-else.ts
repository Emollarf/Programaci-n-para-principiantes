
// if

console.log('Inicio de programa');

export let isTired:boolean = true;
isTired = !isTired

if (isTired){
    console.log('Tomar café');
}

if(!isTired){
    console.log('Tomar agua');
}

console.log('Fin de programa');


// if else

console.log('Inicio de programa');

if (isTired){
    console.log('Tomar café');
} else{
    console.log('Toma agua');
}

console.log('Fin de programa');


// else if 

let grade:number = 50;

if(grade>= 60){
    console.log('El alumno aprueba la clase')
} else if(grade>= 50){
        console.log('Por favor estudie más')}
    else{
        console.log('No aprueba la clase')
    }