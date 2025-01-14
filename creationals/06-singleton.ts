/**
 * ! Singleton
 * A creational desing pattern that ensures a class has only one instance 
 * and provides a global point of access to it.
 * 
 * It is useful when you need to control access to a single instance 
 * of a class, such as a database object or configuration object.
 * 
 * https://refactoring.guru/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";


class DragonBalls {
    private static instance:DragonBalls;
    private ballsCollected:number;

    private constructor(){
        this.ballsCollected= 0;
    }


    public static getInstance():DragonBalls {
        if(!DragonBalls.instance){
            DragonBalls.instance = new DragonBalls();
            console.log('c%The Dragon  balls have been created',COLORS.green);
        }

        return DragonBalls.instance;
    }

    collectBall():void {
        if(this.ballsCollected < 7){
            this.ballsCollected++;
            console.log(
                `ball collected. Total spheres ${this.ballsCollected}`
            );
            return;
        }

        console.log('All 7 Dragon Balls have already been collected! Summon Shenlong')
    }

    summonShenlong(){
        if(this.ballsCollected === 7){
            console.log('Shenlong has been summoned,make your wish');
            this.ballsCollected = 0;
            return;
        }

        console.log(`There are still ${7 - this.ballsCollected} balls left to summon Shenlong`)

    }
}

function main(){
    const gokuDragonballs = DragonBalls.getInstance();
    
    gokuDragonballs.collectBall();
    gokuDragonballs.collectBall();
    gokuDragonballs.collectBall();
    

    const vegetaDragonBalls = DragonBalls.getInstance();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();

    gokuDragonballs.summonShenlong();

    vegetaDragonBalls.summonShenlong();
}

main()