
//¿Cual es el número mayor de la sieguente array?

export let numbers = [1,6,8,4,2,7,10,3,5];
let max = numbers[0];

for(let i = 0; i<=numbers.length-1; i++){ 
        let number = numbers[i]
        if( number >= max){
            max = number  
        }
        
    }
    console.log ('El numero mayor es:' ,  max)
    