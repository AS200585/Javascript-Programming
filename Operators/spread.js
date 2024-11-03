//spread operator is also like rest operator(...) but it speads into an already existing array.
//we can only use it in an argument for a function or array literal.
const arr1 = ['MAR', 'APR', 'MAY', 'JUN', 'AUG']
let arr2
(function(){
    arr2 = [...arr1]//contents of arr1 are now contents of arr2
    arr1[0] = 'potato'
})()
console.log(arr2)