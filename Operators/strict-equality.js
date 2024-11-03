function testStrict(val)
{
    if (val === 10){
        return "Equal"
    }
     return "Not Equal"
}// Strict Equality (===) does not do any type conversion and demands the very specific value to be correct

console.log(testStrict(10))

/*
3 == 3 or '3' : true
3 === '3' : false
*/

function compare(a, b)
{
    if (a === b){
        return "Equal"
    }
     return "Not Equal"
}

console.log(compare(10, "10"))

// !== : Strictly inequality operator