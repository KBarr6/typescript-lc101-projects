import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor (name: string, totalCapacityKg: number) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name; 
    
    }
    sumMass(items:Payload[]): number {
        let arrSum: number = 0;
        for(let i: number = 0; i < items.length; i++) {
            arrSum += items[i].massKg;
        }
        return arrSum;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);    
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            console.log(`Adding ${item.massKg} kg, current mass: ${this.currentMassKg()} kg`);
            return true;
        } else {
            console.log(`Adding ${item.massKg} kg, current mass: ${this.currentMassKg()} kg`);
            return false;
        } 
    }
    
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            console.log(`your ${this.cargoItems} with a ${this.currentMassKg} have been added.`);
            return true;
        } else {
            //console.log(`too much stuff and things`)
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
               console.log(`your ${astronauts} have been added.`);
                return true;
            } else {
               // console.log(`too peopley in here`)
                return false;
            }
     }
    }
