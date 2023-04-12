
let words:string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO'
];



export function getRundomWord(){
    const randomIndex = Math.floor(Math.random()* words.length);
    return words[randomIndex];
}