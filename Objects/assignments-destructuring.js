//destructuring assignment is a special syntax for neatly assigned values taken directly from an object to a variable.
var voxel = {x : 3.6, y : 7.4, z : 6.5}

var x = voxel.x
var y = voxel.y
var z = voxel.z

const {x : a, y : b, z : c} = voxel

const AVG_TEMPERATURES = {
    today : 77.5,
    tomorrow : 79
}

function getTempForTmrw(avgTemperatures)
{
    "use strict"
    const {tomorrow : tempOfTomorrow } = avgTemperatures//destructuring to get tomorrow variable from AVG_TEMPERATURES
    return tempOfTomorrow
}

console.log(getTempForTmrw(AVG_TEMPERATURES))


//destructuring with nested objects
