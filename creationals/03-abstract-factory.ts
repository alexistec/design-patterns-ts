/**
 * !Abstract Factory
 * It is a design pattern that allows creating families of related objects 
 * without specifying their concrete classes.
 * 
 * Instead of creating individual objects directly
 * we create factories that produce a set of related objects.
 * 
 * * It is useful when you need to create objects that are part of a family
 * * and want to ensure that these objects complement each other.
 * 
 * https://refactoring.guru/design-patterns/abstract-factory
 */

import { COLORS } from "../helpers/colors.ts";

/**
 * The purpose of the Abstract Factory is to create families of related objects
 * (in this case, burgers and drinks) without specifying the concrete classes
 * of each of these objects in the main code.
 */


interface Burger {
    prepare(): void ;
}

interface Drink {
    pour(): void;
}


class ChickenBurger implements Burger {
    
    prepare(): void {
        console.log("Preparing burger of %cChicken", COLORS.yellow)
    }
}



class BeefBurger implements Burger {
    
    prepare(): void {
        console.log("Preparing burger of %cBeef", COLORS.red)
    }
}


class Water implements Drink {
    pour(): void {
      console.log('Pouring a glass of %cwater', COLORS.blue)
    }
}

class Soda implements Drink {
    pour(): void {
      console.log('Pouring a glass of %csoda', COLORS.pink)
    }
}


interface RestaurantFactory {
    createBurger() : Burger;
    createDrink() : Drink
}


class FastFoodRestaurantFactory implements RestaurantFactory {
    
    createBurger(): Burger {
        return new BeefBurger();
    }

    createDrink(): Drink {
        return new Soda();
    }
}

class HealthyRestaurantFactory implements RestaurantFactory {
    
    createBurger(): Burger {
        return new ChickenBurger();
    }

    createDrink(): Drink {
        return new Water();
    }
}


function main(factory: RestaurantFactory ){
    const hamburger = factory.createBurger();
    const drink = factory.createDrink();

    hamburger.prepare();
    drink.pour();
}

console.log('\n%cOrder regular burger:', COLORS.green)
main( new FastFoodRestaurantFactory() )


console.log('\n%cOrder healh menu:', COLORS.green)
main( new HealthyRestaurantFactory() )