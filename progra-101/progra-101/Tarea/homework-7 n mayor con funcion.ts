
/* Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
trabajar así:
let maxValue = max( 5, 2, 6);
console.log( maxValue ); // 6  */

 
export function max( a:number, b:number, c:number){
    let values:number[]= [a, b, c];
    let maxValue:number = values[0];
    for( let i = 0; i<values.length; i++){
        if( values[i] > maxValue){
            maxValue = values[i]
        }
    }
    return maxValue
}


function max2(a:number, b:number, c:number){
   if(a>b && a>c){
     let maxValue = a
     return maxValue
    }else if( b>a && b>c){
    let maxValue =b
    return maxValue
   } else{
    let maxvalue = c
    return maxvalue
   }
   
}

function max3 (a:number,b:number,c:number){
    if(a>b){
        return (a>c) ? a:c; 
    }
    if (b>c){
        return (a>c) ? a:c;
    }
}

console.log(max2(5,2,6));
console.log(max2(10,-9999,90));
console.log(max2(-9999991,-999999,-999999));


