let myDate= new Date();
console.log(`toStringMethod :  ${myDate.toString()}`)
// toStringMethod :  Sat Aug 24 2024 14:44:48 GMT+0000 (Coordinated Universal Time)
console.log(`todateString   :  ${myDate.toDateString()}`)
// todateString   :  Sat Aug 24 2024
console.log(`toLocaleString :  ${myDate.toLocaleString()}`)
// toLocaleString :  8/24/2024, 2:44:48 PM

let setDateName=  new Date(2024,7,24)
console.log(setDateName.toDateString())

let setDateTimeName=  new Date(2024,7,24,8,23,)
console.log(setDateTimeName.toLocaleString())

let setCustomDate=  new Date("2023-08-24")
console.log(setCustomDate.toLocaleString())

// let setCustomDate=  new Date("March,05,1994")
// console.log(setCustomDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(setCustomDate.getTime())

console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))

// console.log(myTimeStamp.getDay())

let curentDate=new Date()
console.log(curentDate.getDay());

// myTimeStamp.toLocaleString('default',{
//     weekday:"long"
// })

let currentDate= new Date()
console.log(currentDate.toLocaleString("default",{
    weekday:"long"
}))