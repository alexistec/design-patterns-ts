/**
 * ! Prototype Pattern:
 * 
 * Task:
 * 1. Creata a base Pokemon.
 * 2. Clone the base Pokémon and modofy some atributes in the clones
 * 3. Call displayInfo on each Pokémon to display its details.
 * 
 * Example:
 * const basePokemon = new Pokemon("Charmander", "Fire", 1, ["Flamethrower", "Scratch"]);
 * const clone1 = basePokemon.clone();
 * clone1.name = "Charmeleon";
 * clone1.level = 16
 * clone1.attacks.push("Flame Burst");
 * 
 * basePokemon.displayInfo();
 * clone1.displayInfo
 */

import { COLORS } from "../helpers/colors.ts";



class Pokemon {
    
    constructor(
        public name: string,
        public type: string,
        public level: number,
        public attacks: string[]
      ) {
        // throw new Error('Method not implemented.');
    }


    clone(): Pokemon {
        return new Pokemon(this.name, this.type, this.level, [...this.attacks]);
    }

    displayInfo(): void {
        console.log(
            `Nombre: ${this.name}\nTipo: ${this.type}\nNivel: ${
              this.level
            }\nAtaques: ${this.attacks.join(', ')}`
        );
    }
}


function main(){
    const basePokemon = new Pokemon("Chamander","Flame", 1, ["Llamarada","Arañazo"]);

    const clone1 = basePokemon.clone();
    clone1.name = "Charmarlon";
    clone1.level = 16;
    clone1.attacks.push("LanzaLlamas");

    console.log('%cCharmander', COLORS.red);
    basePokemon.displayInfo(); // Aquí no debe de aparecer "Lanzallamas"

    console.log('%cCharmeleon', COLORS.pink);
    clone1.displayInfo();
}

main();