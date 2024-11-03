/*
Switch statement tests a value and can have many case statementswhich define various pooiblities.
*/
//Switch is an alternative to If-Else statement.

function caseSwitch(val)
{
    var answer = ""
    switch(val){
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        default:
            answer = "delta"
            break
    }
    return answer
}

console.log(caseSwitch(4))