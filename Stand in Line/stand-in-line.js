/*Queue is an abstract data structure where items are kept in order.
New items can be added at the back and old items can be taken off from the front of the queue.
*/

function nextInLine(arr, item)
{
    arr.push(item)
    return arr.shift()
}

var testArr = [1, 2, 3, 4, 5]

console.log("Before : "+ JSON.stringify(testArr))
console.log(nextInLine(testArr, 6))
console.log("After : " + JSON.stringify(testArr))
//JSON.stringify changes an array into a string that can be printed on a screen easily.