/* Crear una función que reciba como argumento un arreglo, la función debe de retornar el
nombre que tenga más letras del arreglo, y debe de trabajar así:
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray( heroes );
console.log( hero ); // Profesor Charles Xavier  */


/* let heroes:string[] = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']

function hero(array:string[]){
    let numberLetter:number = array[0].length;
    let word:string  = '';
    for ( let i = 0; i<array.length; i++){ 
        if (numberLetter <= array[i].length){
            numberLetter = array[i].length;
            word = array[i]
        } 
    }
   return word
}

console.log(hero(heroes)) */

export let heroes = ['Deadpool', 'Ciclopeeeeeee', 'Magneto', 'Profesor Charles Xavier'];

function largestNameOfArray(array:string[]){
    let numberLetter:number = array[0].length;
    let word:string  = '';
    for ( let i = 0; i<array.length; i++){ 
        if (numberLetter <= array[i].length){
            numberLetter = array[i].length;
            word = array[i]
        } 
    }
   return word
}

let hero = largestNameOfArray( heroes );

console.log (hero)