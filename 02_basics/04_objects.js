// const obj = new Object();
// console.log(obj)
const aisleUser={
    name:"Abid",
    userName:{
        fullName:{
            firstName:"AbidNaseer",
            lastName:"Rather"
        }
    }
}
// console.log(aisleUser.userName.fullName)

const obj1 ={1:"a",2:"b",3:"c"}
const obj2 ={4:"d",5:"e",6:"f"}

// const obj3={obj1 ,obj2}
const obj3 =Object.assign({},obj1,obj2)
console.log(obj3)


/*later on data can be from database like an array of objects as below,so below is discussed how
to access  it one is users.map and other is users[0] users[1] */
const users=[{
    id:"123@guid",
    email:"a@gmail.com"
},
{
    id:"1234@guid",
    email:"b@google.com"
},
{
    id:"12345@guid",
    email:"c@yahoo.com"
},
{
    id:"123456@guid",
    email:"d@hotmail.com"
}]
console.log(users[3].email)
console.log(Object.keys(users))
console.log(Object.values(users))
console.log(Object.values(aisleUser))

// console.log(facebookProfile.hasOwnProperty('userName'))
//  true
