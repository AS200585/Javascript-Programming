function sequence(val)
{
    var answer = ""
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break
        case 4:
        case 5:
        case 6:
            answer = "High"
            break
    }
    return answer
}

console.log(sequence(5))