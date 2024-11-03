function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
    var result = ""
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + " to the store very " + myAdverb + "."

    return result
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))
console.log(wordBlanks("cat", "small", "crawled", "quietly"))
console.log(wordBlanks("truck", "massive", "drove", "slowly"))