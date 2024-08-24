const gameName="Discord"
console.log(typeof gameName);

const name=new String("Abid Naseer")
console.log(typeof name);
console.log(name[0])
console.log(name.__proto__)
console.log(name.toUpperCase())

/*remember after modifying the variable to Uppercase like as on top we created name.toUpperCase
 but it will not change original variable because strings are immutbale 
*/

// Other methods of string charAt() returns character at particuar key//
console.log(name.charAt(0))
console.log(name.charAt(4))
console.log(name.charAt(2))

//indexOf(0) returns character at a particular index//
console.log(name.indexOf('b')) 
// i

//subString(0,4) takes two parameters wil start from 0 but to only 3 //

console.log(name.substring(0,6))
// "Abid N"

//Trim() wil remove unnecessary spaces from a string from right and left of a string  

const str= "  AbidNaseerRather"
console.log(str)
// "  AbidNaseerRather"
console.log(str.trim())
"AbidNaseerRather"

// slice will strat from index and to less than 1 togiven parameter
const strSlice ="mangoes"
console.log(strSlice)
console.log(strSlice.slice(2,6))
//"ngoe"

//replace will replace with ("","")
const url="https://abidrather36.com/github&"
console.log(url)
console.log(url.replace("&","/"))  


//include will check whether a given value is present in a variable or not returns bool

const asd="abidrather36"
console.log(asd)
console.log(asd.includes("40"))

/*The split() method of String values takes a pattern and divides 
this string into an ordered list of substrings 
by searching for the pattern, puts these substrings into an array, and returns the array*/

const quote=" the quick brown fox jumps over lazy dog"
console.log(quote)
console.log(quote.split(" "))

