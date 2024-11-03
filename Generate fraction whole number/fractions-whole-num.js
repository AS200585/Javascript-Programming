function randomFraction(){
// Fractions
    return Math.random()
}

console.log(randomFraction()) 

function randomWhole(){
// Whole numbers
    return Math.floor(Math.random() * 10)
}

console.log(randomWhole())

//Generating random whole numbers within range
function randomRange(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomRange(1, 9))