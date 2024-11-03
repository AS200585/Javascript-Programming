//Concise declarative functions
const bicycle = {
    gear : 2,
    setGear (newGear){//setGear is an object that holds the function newGear
        "use strict"
        this.gear = newGear
    }
}

bicycle.setGear(3)
console.log(bicycle.gear)