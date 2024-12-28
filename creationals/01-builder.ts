/**
 * ! Builder Pattern:
 * It is a creational design pattern that allows us to cosntruct complex objects
 * Step by Step.
 *
 * The pattern allows us to produce different types and representations
 * of an object using the same construction code.
 *
 * * It is useful when we need to build a complex object with many parts
 * * and want the construction process to be independent of the parts
 * * that make it up.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";



class Computer {
    public cpu: string = 'cpu - not defined';
    public ram : string = 'ram - not defined';
    public storage:string = 'storage - not defined';
    public gpu?:string;


    displayConfiguration() {
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`Storage: ${this.storage}`);
        console.log(`GPU: ${this.gpu ?? 'Not GPU'}`);
    
    }
}


class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }


    setCPU(cpu: string) : ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string) : ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string) : ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string) : ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }


    builder() {
        return this.computer
    }
}

function main() {
    const basicComputer = new ComputerBuilder()
        .setCPU('Intel i3')
        .setRAM('8GB')
        .setStorage('1TB')
        .builder();

        console.log('Basic Computer ===', COLORS.blue);
        basicComputer.displayConfiguration();

    const gamingComputer = new ComputerBuilder()
        .setCPU('Intel i9')
        .setRAM('32GB')
        .setStorage('2TB')
        .builder()  

        console.log('%c\nGaming Computer \n', COLORS.red);
        gamingComputer.displayConfiguration();
}


main();