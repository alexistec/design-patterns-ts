/** 
 * !Factory Method:
 * The factory method pattern allows the creation of objects without sepcifying 
 * the exact class of object that will be created.
 * 
 * Instead, it delegates the object creation to subclasses or methods.
 * that encasulate this logic
 * 
 * https://refactoring.guru/design-patterns/factory-method
*/

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
    prepare() : void;
}

class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log('%cPreparing Chicken Burger!', COLORS.orange);
    }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log('%cPreparing Beef Burger!', COLORS.brown);
    }
}   

class BeanHamburger implements Hamburger {
    prepare(): void {
      console.log('cPreparing of %cfrijol', COLORS.orange);
    }
  }


abstract class Restaurant {
    protected abstract createHamburger(): Hamburger;

    orderHamburger() {
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }
}

class ChickenRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
      return new ChickenHamburger();
    }
  }
  
class BeefRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
      return new BeefHamburger();
    }
}
  
class BeanRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
      return new BeanHamburger();
    }
}


function main() {
    let restaurant:Restaurant;

    const burgerType = prompt('What type of burger do you want? (chicken, beef, bean)');


    switch(burgerType) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;

        case 'beef':
            restaurant = new BeefRestaurant();
            break;

        case 'bean':
            restaurant = new BeanRestaurant();
            break;
        default:
            throw new Error('Invalid burger type');
    }

    restaurant.orderHamburger();

}

main();