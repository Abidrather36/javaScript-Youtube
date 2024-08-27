// const obj = new Object();
// console.log(obj)
// const aisleUser={
//     name:"Abid",
//     userName:{
//         fullName:{
//             firstName:"AbidNaseer",
//             lastName:"Rather"
//         }
//     }
// }
// console.log(aisleUser.userName.fullName)

const obj1 ={1:"a",2:"b",3:"c"}
const obj2 ={4:"d",5:"e",6:"f"}

// const obj3={obj1 ,obj2}
const obj3 =Object.assign({},obj1,obj2)
console.log(obj3)