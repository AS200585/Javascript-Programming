//Objects are similar to arrays except that instead of using indexes to access data, you use properties.
/*Objects are going to be defined with these curly braces at the beginning and the end.And the properties are everything before the colons.*/

var ourDog  = [
    {
    "Name" : "Camper",
    "Legs" : 4,
    "Tails" : 1,
    "Friends" : ["Everything!"]
    },

    {
    "Name" : "Bumper",
    "Legs" : 3,
    "Friends" : ["Joey", "Joe", "Joel"]
    }
]


ourDog.Bark = "woof" // adding new properties using dot notation
ourDog["Bark"] = "woof!" // adding new properties using bracket notation

delete ourDog.Friends // deleting properties from an Object

var name = ourDog.Name // accessing object properties with dot notation
var friends = ourDog["Tails"] // accessing properties using bracket notation  

var dogLegs = "Legs"
var legs = ourDog[dogLegs] // accessing properties through variables

console.log(name)
console.log(friends)
console.log(legs)

ourDog.Name = "Happy Camper" // updated object property using dot notation

console.log(ourDog) 
// Objects can be used to replace switch statements

function checkObj(checkProp){  // Testing Objects for properties
    if (ourDog.hasOwnProperty(checkProp)){
        return ourDog[checkProp]
    } else {
        return "Not Found" //if property given is not found
    }
}

console.log(checkObj("gift"))