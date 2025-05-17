/**
 * ! Bridge Pattern
 * 
 * This pattern allows us to desouple an abstraction from its implementation,
 * so that both can vary independently.
 * 
 * It is useful when you have multiple implementations of an abstraction.
 */

import { COLORS } from '../helpers/colors.ts';

interface Ability {
    use(): void
}


class SwordAttack implements Ability {
    use(): void {
        console.log('Attacks with a %cfierce sword', COLORS.blue);
    }
}

class AxeAttack implements Ability {
    use(): void {
        console.log('Attacks with a %caxe brutally', COLORS.blue);
    }
}

class MagicSpell implements Ability {
    use(): void {
        console.log('Cast a powerful %cmagical spell', COLORS.green);
    }
}

class FireballSpell implements Ability {
    use(): void {
        console.log('Cast a %cfireball', COLORS.green);
    }
}


abstract class Character {
    protected ability: Ability;

    constructor(ability: Ability){
        this.ability = ability;
    }

    setAbility(ability: Ability) {
        this.ability = ability;
    }

    abstract performAbility(): void;

}

class Warrior extends Character {
    override performAbility(): void {
        console.log('\nThe warrior is ready to fight');
        this.ability.use();
    }
}

class Mage extends Character {
    override performAbility(): void {
        console.log('\n The wizard prepares his magic');
        this.ability.use();
    }
}


function main() {
    const warrior = new Warrior(new SwordAttack());
    warrior.performAbility();

    warrior.setAbility(new AxeAttack());
    warrior.performAbility();

    const mage = new Mage(new FireballSpell());
    mage.performAbility();
}

main();