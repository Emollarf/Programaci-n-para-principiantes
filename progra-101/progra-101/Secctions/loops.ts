
export let base = 10;
let limit = 50;

console.log('10 x 1 =10')

let number:number = 1;
let resultado: number= 1;

while ( number <= limit){
    resultado = number * 10;
    console.log ( number,'x', base,' = ',  resultado);
    number ++;
}

/* let number1:number= 10; 
for ( let i = 1 ; i =<50; i++){
    resultado = i*10
    console.log( i , 'X' , number1, '=', resultado)
} */

/* for (let i = 1; i<=limit; i++){
    console.log(base, 'x', i, '=', base*i)
}
 */
/* 
 do {
    resultado = number * base;
    console.log ( number,'x', base, '= ',  resultado);
    number ++;
} while (number <= limit) */