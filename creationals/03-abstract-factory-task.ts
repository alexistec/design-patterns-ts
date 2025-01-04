/**
 * !Exercise: Implement Abstract Factory Pattern
 * 
 * !Instructions:
 *  1.Complete the Product Classes:
 *      • ElectricCar must implement Vehicule and display the message "Assembling an electric car".
 *      • GasCar must implement Vehicule and display the message "Assembling a combustion car".
 *      • ElectricEngine must implement Engine and display the message "Starting electric engine".
 *      • GasEngine must implement Engine and display the message "Starting combustion engine".
 * 
 * 2. Complete the Factory Classes:
 *      • ElectricVehiculeFactory must create an ElectricCar and ElectricEngine.
 *      • GasVehicleFactory must create a GasCar and GasEngine
 * 
 * 3. Test the Code:
 *      • Run the code to ensure that each factory produces the correct type of vehicule and engine.
 *  */


interface Vehicule {
    assemble(): void;
}

interface Engine {
    start(): void;
}


class ElectricCar  implements Vehicule{
    assemble(): void {
      console.log('Assembling a electric car')
    }
}


class GasCar  implements Vehicule{
    assemble(): void {
      console.log('Assembling a combustion car')
    }
}


class ElectricEngine implements Engine{
    start(): void {
      console.log('Starting electric engine')
    }
}


class GasEngine implements Engine{
    start(): void {
      console.log('Starting combustion engine')
    }
}


interface VehiculeFactory {
    createVehicule(): Vehicule;
    createEngine(): Engine;
}

class ElectricVehicleFactory implements VehiculeFactory {
    
    createVehicule(): Vehicule {
      return new ElectricCar();
    }

    createEngine(): Engine {
      return new ElectricEngine();
    }
}

class GasVehicleFactory implements VehiculeFactory {
    createVehicule(): Vehicule {
      return new GasCar()
    }
    createEngine(): Engine {
      return new GasEngine()
    }
}


function main(factory: VehiculeFactory) {
    const vehicule =factory.createVehicule();
    const engine = factory.createEngine();

    vehicule.assemble();
    engine.start();
}


//test 

console.log('Creating electric vehicle...')
main(new ElectricVehicleFactory())

console.log('\nCreating combustion vehicle...')
main(new GasVehicleFactory())
