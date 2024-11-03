var ourArray = ["John", 23]
console.log(ourArray)

var array1 = [["The universe", 40], ["Everything", 50]]
console.log(array1)

var array2 = [50, 60, 70]
var data2 = array2[1]
console.log(data2)

var array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
console.log(array3[1][1])

var pushArray = ["Sam", "James", "K"]
pushArray.push("Head", "J") //push() to add elements at the end of an array
console.log(pushArray)

var popArray = [1, 2, 3]
var removedFromTheArray = popArray.pop() //pop() removes last element
console.log(popArray)

var shiftArray = [5, 6, 7]
var shiftFromTheArray = shiftArray.shift()// shift() removes first element
console.log(shiftArray)

var unshiftArray = [1, 3, 5]
unshiftArray.unshift(0)
console.log(unshiftArray)
