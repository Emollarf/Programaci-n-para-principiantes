import { base, limit } from "../Secctions/loops";

let resultado = 0;

export function printMultiplicationTable(base:number, limite:number = 10){
    /* if( limite <=0){
        throw new Error ('El limite debe ser mayor a 0')
    } */
    if(limite <= 0){
        limite = 10; 
    }
    for (let i=1; i<= limite; i++){
        console.log(base, 'x', i ,'=', i*base)
    }
}