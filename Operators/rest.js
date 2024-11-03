//rest operator(...) allows us to create a function that takes a variable number of outcomes
const sum = (function(){
    return function sum(...args){//everything passed in sum(...args) is converted into one array called args.
        return args.reduce((a, b) => a + b, 0)
    }
})()
console.log(sum(1, 2, 3, 4, 5))