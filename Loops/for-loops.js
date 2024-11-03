var ourArray = []

for (var i = 0; i < 5; i++){
    ourArray.push(i)
}

var myArray = []

for (var i = 1; i < 6; i += 2){
    myArray.push(i)
}

console.log(ourArray)
console.log(myArray)

var minusArray = []

for (var i = 10; i > 0; i -= 1){
    minusArray.push(i)
}

console.log(minusArray)


//Nesting for loops
function multiplyAll(arr)
{
    var product = 1
    
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }

    return product
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]])

console.log(product)