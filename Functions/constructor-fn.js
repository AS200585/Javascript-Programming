//Class syntax to define a constructor funtion
class SpaceShuttle{
    constructor (targetPlanet){
        this.targetPlanet = targetPlanet
    }
}

var zeus = new SpaceShuttle('Jupiter')
console.log(zeus.targetPlanet)