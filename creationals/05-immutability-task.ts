/**
 * ! Inmutability with Copy
 * 
 * Task:
 * 1. Complete the `copyWith` method in the `Player` class to allow 
 * creating a copy with changes to `name`, `score`, or `level`
 * 
 * 2.Use the client code to test the functionality of `copyWith`,
 * making changes to the player`s  name, score, and level.
 */

import { COLORS } from "../helpers/colors.ts";

class Player {
    readonly name:string;
    readonly score: number;
    readonly level: number;


    constructor(
        name: string,
        score: number,
        level:number
    ){
        this.name = name;
        this.score = score;
        this.level = level;
    }


    copyWith({ name, score, level }: Partial<Player>): Player {
        return new Player(
            name ?? this.name,
            score ?? this.score,
            level ?? this.level
        )
    }

    displayState(): void {
        console.log(`\n%cJugador: ${this.name}`, COLORS.green);
        console.log(`%cPuntaje: ${this.score}`, COLORS.yellow);
        console.log(`%cNivel: ${this.level}`, COLORS.blue);
    }

}

function main() {
    // Create player initial
    let player = new Player('Carlos', 0, 1);
    console.log('Estado inicial:');
    player.displayState();
  
    // Increase score
    player = player.copyWith({ score: 10 });
    console.log('\nDespués de incrementar el puntaje:');
    player.displayState();
  
    // Level up
    player = player.copyWith({ level: 2 });
    console.log('\nDespués de subir de nivel:');
    player.displayState();
  
    // Change name player
    player = player.copyWith({ name: 'Carlos Pro' });
    console.log('\nDespués de cambiar el nombre:');
    player.displayState();
  }
  
  main();