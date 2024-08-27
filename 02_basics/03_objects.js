/*Objects ar created in two ways Singleton and literals ,difference is through singleton
( it will create single object while thorugh literals can be creatd many objects */

//Object Literals//
// const myObj ={
//     name:"Abid"
// }
// console.log(myObj);

// Object Creation in literal way 
let mySymbol= Symbol("guid123")

let myProfile={
    name:"Abid",
    [mySymbol]:"guid321",
    email:"abid@google.com",
    location:"hrbr layout 1st sector",
    age:"28",
}

/*but if i need symbol inside object how do we do it ? the answer is to create first symbol
but to access it and write it inside object use [mySmbol]*/
console.log(myProfile["name"])
console.log(myProfile[mySymbol])

    myProfile.greeting =function () {
        console.log(`hello my name is  ${this.name} my age is ${this.age} i live in ${this.location} 
            and my email is ${this.email} Symbol ${this.mySymbol}`)
    }
    myProfile.greeting()
