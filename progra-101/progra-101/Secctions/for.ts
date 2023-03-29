/*  
for ( let i = 10; i>=0; i--){
 console.log('i', i)
 */

for ( let i = 0; i<= 10; i++){
    /* console.log('i:', i); */
    
    if( i === 5){
        continue;
    }
    console.log('i:', i);

    if ( i === 5){
        break;
    }
}
console.log('Fin de programa')
