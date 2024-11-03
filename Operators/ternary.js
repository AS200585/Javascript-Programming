function checkEqual(a, b)
{
    return (a == b) ? true : false //Conditional(ternary) operator
}

console.log(checkEqual(2, 2))

//condition ? statement if true : statement if false


function checkSign(num)
{
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0))