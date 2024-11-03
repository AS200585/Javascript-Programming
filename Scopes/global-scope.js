/*
Variables defined outside of function block have Global Scope.
Scope refers to visiblity of variables.
Global Scope refers to variables that can be seen everywhere in our JS code.
*/

var myGlobal = 10

function fun1()
{
    oopsGlobal = 5//if oopsGlobal is under var or let, then it becomes part of the function
}

function fun2()
{
    var output = ""
    if(typeof myGlobal != "undefined")
    {
        output += "myGlobal : " + myGlobal
    }
    if(typeof oopsGlobal != "undefined")
    {
        output += "\noopsGlobal : " + oopsGlobal
    }
    console.log(output)
}

fun1()
fun2()