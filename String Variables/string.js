var firstName = 'Alan';
var lastName = 'Turing';

var myQuote = 'I am a \'single quoted\' string inside a \'single quote\'.';
console.log(myQuote) // escape quote (/' or /") in order to quote within a quote

var myStr = 'I am a string "inside a string".';
console.log(myStr)//method#2 for escaping quote

var myTick = `I am a string 'inside a string' "inside a string".`;
console.log(myTick) //Method#3 using BackTicks(``)

/** 
ESCAPE SEQUENCES
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
**/

var ourStr1 = "I come first. ";
ourStr2 = "I come second.";
ourStr1 += ourStr2;
console.log(ourStr1)
console.log(ourStr1.length - 1)

console.log(ourStr1[3])

//String Immutablity;
var hw = 'Jello World'
hw = 'Hello World'
console.log(hw)

