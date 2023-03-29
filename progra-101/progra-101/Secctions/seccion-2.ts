
let numberOfLines = 1;


console.log('Línea #', numberOfLines);
numberOfLines = numberOfLines + 1;

console.log('Línea #', numberOfLines);
 numberOfLines ++;

console.log('Línea #', numberOfLines);
numberOfLines += 1;

console.log('Línea #', numberOfLines);


console.log(' ')


// Con método de función

let numberOfLinesFunction = 1; 

export function increaseLineNumber(){
    numberOfLinesFunction ++;
    //numberOfLinesFunction += 2;
    //numberOfLinesFunction = numnberOfLines + 3;
}


console.log('Línea #', numberOfLinesFunction);

increaseLineNumber();
console.log('Línea #', numberOfLinesFunction);

increaseLineNumber();
console.log('Línea #', numberOfLinesFunction);

increaseLineNumber(),
console.log('Línea #', numberOfLinesFunction);


//

console.log('')

let numberOfLinesFunctionPrint = 1 

export function printLineNumber(){
    console.log('Línea #', numberOfLinesFunctionPrint)
    numberOfLinesFunctionPrint ++;
}

printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();
