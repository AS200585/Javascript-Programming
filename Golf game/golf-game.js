var names = ["Hole-in-one!", "Eagle", "Par", "Bogey", "Double Bogey"]
function golfScore(par, strokes)
{
    if (strokes == 1){
        return names[0]
    }else if (strokes <= par - 2){
        return names[1]
    }else if (strokes == par - 1){
        return names[2]
    }else if (strokes == par){
        return names[3]
    }else if (strokes == par + 1){
        return names[4]
    } else {
    return "Change me"
    }
}

console.log(golfScore(2, 5))