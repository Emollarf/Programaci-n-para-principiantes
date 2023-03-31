import { 
    addTwoNumber, 
    dividir, 
    multiplicar, 
    substract
} from "../helpers/math-helpers";

import {addTwoNumber2} from '../helpers/math-helpers';
/* import{addTwoNumber} from './helpers/math-helpers';
   import{dividir} from './helpers/math-helpers';
   import{multiplicar} from './helpers/math-helpers';
   import{substract} from './helpers/math-helpers';
 */

function greet(name: string = 'Desconocido', lastName: string) {
    console.log('Hola ', name, lastName);
}
let firstName: string = 'Juan';
let Name2 = 'Mollar';

greet(firstName, Name2);

/* function addTwoNumber(num1:number, num2:number):string{
    console.log(num1 + num2);
     return 'hola mundo' + num1 + num2;    
 }
 let total = addTwoNumber (10,20); 
 */

/* función en otro archivo en este caso math-helpers.
Aplicamos export delante de la función. 
En la página donde llamamos la función ponemos el ratón encima del error de llamar la función
Apretamos Quick-fix dos deja dos opciones:
1. importar la referencia (Si no aparece la opcion importar se puede picar a mano)
2. crear la función y realizara una funcion para que pueda compilar y lanzará un error.
 */ 

addTwoNumber(10, 20);

let total = addTwoNumber(10, 20);

console.log(total + 10);

addTwoNumber(30)

let num1:number = 10;
let num2:number = 20;

let totalAdd:number= addTwoNumber(num1, num2);
let totalsubstract:number = substract (num1, num2);
let totalmultiplicar:number = multiplicar (num1, num2);
let totaldividir:number = dividir(num1 , num2);

console.log('add:',totalAdd);
console.log('substract:',totalsubstract);
console.log('multiplicar:',totalmultiplicar);
console.log('dividir:',totaldividir);






