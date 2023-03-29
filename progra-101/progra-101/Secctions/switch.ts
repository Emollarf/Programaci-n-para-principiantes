
export let weekDay: number = 3; // 1 = lunes etc, 

if (weekDay<= 0){
    //console.log('No es permitido el dia')
    throw new Error( 'Dia no permitido');
}
switch(weekDay){
    case 1:
        console.log('Es lunes');
        break;
    case 2: 
        console.log('Es martes');
        break;
    case 3:
        console.log('Es miércoles');
        break;

    default: 
        console.log('No es ni lunes, ni martes, ni miercoles');
}