/*Data Types :- 
undefined : not defined variable that is not set to be anything yet
null : nothing
boolean : True or False
string : any type of text
symbol : immutable primitive value that is unique
number
object : store key value pairs
Variable(var) allows computer to store and manipulate data in a dynamic fashion
*/

//"use strict" keyword is declare on top of JS code or function in order to catch coding mistakes

var myName = "Ananay" //variable declaration 1 (can be used throughout whole program)
let ourName = "FreeCodeCamp" //variable declaration 2 (only used within the scope where we declared it)
console.log(myName)
const pi = 3.14 //variable declaration 3 

myName = ourName

console.log(myName)

//let ensures that we do not have to declare a seme keyword everytime we define it unlike var
let catName = "Bob"
catName = "Jon"
catName = "Browny"
catName = "Sprinkles"

console.log(catName)

//comparing scopes of var and let keyword
function checkScope()
{
    "use strict"
    var i = "function scope"
    if (true){
        let i = "block scope" //let is limited to the block it is declared in. If we only declare let, then we get an error.
        console.log("Block scope i is : ", i)
    }
    console.log("Function scope i is : ", i)
    return i
}

checkScope()

/* const keyword helps us to prevent reassigning of a variable in order to prevent mistakes.
We can also use const to declare our variables in capital. Eg., const SENTENCE */
function printManyTimes(str){
    "use strict"

    const SENTENCE = str + " is cool"
    for (var i = 0; i < str.length; i += 2){
        console.log(SENTENCE)
    }
}

printManyTimes("Programming")