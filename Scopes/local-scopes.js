/*
Variables declared within functions and have function parameters have local scope.
They are only visible from within the function.
*/

function localScope()
{
    var myVar = 5
    console.log(myVar)
}
localScope()


var outerWear = "T-Shirt"

function myOutfit()
{
    var outerWear = "Sweater" /*if we declare a local scope within a function with the same name as the global scope, 
                                the local one replaces the global one on calling the function*/
    return outerWear
}

console.log(myOutfit())
console.log(outerWear)