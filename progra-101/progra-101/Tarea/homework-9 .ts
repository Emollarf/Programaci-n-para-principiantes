/* 
Crear una función que reciba un arreglo como argumento, la función debe de retornar un
nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
Ejemplo:
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
console.log( herosWithLetterS ); // She Hulk, Spiderman */


export let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];


/* function heroesThatStartsWith (arrayHeroes:string[], letraInicial:string){
    let heroesMismaInicial:string[] = [];
    for(let i=0; i<arrayHeroes.length; i++ ){
        let copyHereo:string = arrayHeroes[i];
        let wordLowerCase:string = arrayHeroes[i].toLowerCase();
        let argumentoMiniscula:string = letraInicial.toLowerCase();
        if (wordLowerCase[0] === argumentoMiniscula){
            heroesMismaInicial.push(copyHereo);
        }
        
    }

    return heroesMismaInicial
} */

function heroesThatStartsWith (arrayHeroes:string [], inicial:string){
    let newHeroes:string[]=[];
    for ( let i=0; i<arrayHeroes.length; i++){
        let hereo:string =arrayHeroes[i];
        if(hereo.startsWith(inicial)){
            newHeroes.push(hereo);
            
        }
    }
    return newHeroes
};

let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
console.log(herosWithLetterS);