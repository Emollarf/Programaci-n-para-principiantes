
/* Dado el siguiente arreglo:
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
Haga una impresión en consola así:

1 es un número impar
2 es un número par
3 es un número impar
…
6 es un número par

Debe de utilizar un ciclo FOR para generar dicha impresión.
Tip: usar el operador % para obtener el resultado, ejemplo:
2%2; // 0
3%2; // 1
4%2; // 0
5%2; // 1 */

export let numbers:number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
numbers.sort();

for (let i= 0; i<=numbers.length-1; i++){
let number:number = numbers[i];
let porcentaje = number%2;
if (porcentaje === 0){
    console.log (number + ' es un número par')
}else {
    console.log (number + ' es un número impar')
}
}