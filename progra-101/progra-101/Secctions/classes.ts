
export class Car {
    static className = 'car';
    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type:string;

    private readonly creatAt: number;

    constructor(brand: string, type:string){
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 50;
        this.isRunning = false;
        this.type = type;

        this.creatAt = 123456789
    }


    fillTank(gas:number){
        if(gas <= 0){
            throw new Error('Gas tiene que ser positivo');
            return;
        }
       
        if(this.fuelTank >= 100 ){
            console.log('error no puedes poner gasolina');
            this.fuelTank = 100;
            return;
        }

        if (this.fuelTank >= 0 && this.fuelTank <100 ){
            let totalGas = this.fuelTank + gas;
            let gasolinaSobrante = totalGas - 100;
            if( totalGas >= 100) {
                this.fuelTank = 100;
                console.log( ' el coche tiene ' + this.fuelTank)
                console.log ('Sobra ', gasolinaSobrante)
            } else{
                this.fuelTank = totalGas;
                console.log( ' el coche tiene ' + this.fuelTank)
            }
        }

    }

    turnOn(){
        if(this.isRunning){
            console.log('El coche ya estaba encendido.')
            return;
        }
        
        if(this.fuelTank <= 0){
            console.log ('No tiene gasolina');
            return;
        }
            this.isRunning = true;
            console.log('El coche ya esta encendido')

        }    
    };
    
let myMazda = new Car ('seat','turismo');



myMazda.fillTank(30);
myMazda.turnOn();
console.log(myMazda);
console.log(Car.className);