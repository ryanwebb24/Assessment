function sumZero(arr) {
    let newSet = new Set()
  for (let num of arr) {
    if (newSet.has(-num)) {
      return true
    }
    newSet.add(num)
  }
  return false
}
// with this problem the loop runs through the array once with no other loops so it is O(n)

function uniqueChars(str) {
    let strArr = str.split("")
    for (let i in strArr){
        let letter = strArr[i]
        strArr.splice(i, 1)
        if ( strArr.includes(letter)){
            return false
        }
    }
    return true
}
// this will be O(n) because the atr is changing and it is only looped through once

function isPangram(str) {
    let strArr = str.toLowerCase().split("")
    let alphabetLetters = {
        "a":0, "b":0,"c":0,"d":0,"e":0,"f":0,"g":0,"h":0,
        "i":0,"j":0,"k":0,"l":0,"m":0,"n":0,"o":0,"p":0,
        "q":0,"r":0,"s":0,"t":0,"u":0,"v":0,"w":0,"x":0,
        "y":0,"z":0
    }

    for (let i of strArr) {
        if (Object.keys(alphabetLetters).includes(i)) {
            alphabetLetters[i] += 1
        }
    }
    for (let i in alphabetLetters){
        if (alphabetLetters[i] === 0){
            return false
        }
    }
    return true
}
// for this there are to non-nested for loops running and the increasing part would only be the str then it would be O(n)

function longestWord(arr) {
    arr = arr.map(x => x.length)
    arr = arr.sort((a,b) => b - a)
    return arr[0]
}

// since both the map and sort functions are just for loops under the hood we can see that this is O(n) because they are not nested

console.log("false:", sumZero([]))
console.log("false:", sumZero([1]))
console.log("false:", sumZero([1, 2, 3]))
console.log("true:", sumZero([1, 2, 3, -2]))
console.log("true:",uniqueChars("Monday"))
console.log("false:", uniqueChars("Moonday"))
console.log("true:",isPangram("The quick brown fox jumps over the lazy dog!"))
console.log("false:", isPangram("I like cats, but not mice"))
console.log("5:", longestWord(["hi", "hello"]))

