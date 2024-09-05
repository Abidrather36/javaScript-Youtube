// let arr=[1,2,3,4,"abid","amir"]
// for (const element of arr) {
//     console.log(element)
// }

let message="hi,mr Abid Naseer Welcome to Chai aur Code"
for (const msg of message) {
    // console.log(` each character is  ${msg}`)
}

const map=new Map()
// map.set("a","1")
// map.set("one",["flash","abid"])
// map.set("two",15000)
// map.set("two",30000)
// map.set("obj",{name:"abid"})

map.set("In","India")
map.set("Pak","Pakistan")
map.set("Ch","China")
map.set("In","India")

console.log(map.get("In"))
console.log(map)

for (const [key,value] of map) {
    console.log(key,":",value)
}




console.log(map.get("a"))
console.log(map.get("one"))
console.log(map.get("two"))
console.log(map.get("obj"))



