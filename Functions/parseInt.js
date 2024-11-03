function convertToInteger(str)
{
    return parseInt(str)
}

console.log(convertToInteger("56" + "12"))

// using parseInt with Radix
//Radix is used to specify the base of the string
function convert2Integer(str){
    return parseInt(str, 2)
}
// base is 2 so that computer knows that number passed is a binary number
console.log(convert2Integer("111100"))