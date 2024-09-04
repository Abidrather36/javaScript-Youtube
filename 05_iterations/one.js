// const array=[1,2,3,4,5,6,7]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }
// console.log("ada",array[2])

for (let i = 0; i <=5; i++) {
    console.log("outer loop value",i)
for (let j = 0; j <=5; j++) {
    console.log(`inner value ${j} and  outer loop value ${i}`)
}
}

for (let i = 1; i <= 5; i++) {
    console.log("table of ",i)
for (let j = 1; j <=5; j++) {
    console.log(i + " * " + j + " = "+ i*j)
}}