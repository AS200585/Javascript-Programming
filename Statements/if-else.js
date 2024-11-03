function ifElse(val)
{
    if (val > 10){
        return "Greater than 10"
    } else if (10 > val > 5){
        return "Between 5 and 10"
    } else {
        return "5 or less"
    }
}

console.log(ifElse(12))