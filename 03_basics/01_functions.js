// function myName(){
//     console.log("A")
//     console.log("b")
//     console.log("i")
//     console.log("d")


// }
// console.log(myName)

// function addOfTwoNumbers(num1,num2){
//     if(typeof num1 ==="number" && typeof num2==="number"){
//         console.log(num1+num2)
//     }
// }
// addOfTwoNumbers(2,2)

// function twoString(str1,str2){
//     if(typeof str1==="string" && typeof str2==="string"){
//         return str1.concat(str2);
//     }
//     else{
//         return "Type Mismatch"
//     }
// }
// let res=twoString("Abid","Naseer")
// console.log(res)

//Understanding undefined//

// function userlogging(username="default"){
//     if(username===undefined){
//         console.log("please enter your username");
//         return ;
//     }
//     else{
//         return `${username} you just logged in`
//     }
// }
// userlogging()
// "please enter your username"
// console.log(userlogging())
// 'Abidrather36 you just logged in


// function one(){
//     const username="abidnaseer"

//     function two(){
//     const email ="abidnaseer@google.in"
//     console.log(username)
//     }
//     two()
//     // console.log(email)
// }
// one()
if(true){
const userName="abidnaseer36"
if(userName==="abidnaseer36"){
    const website =" chaiaurcode"
    console.log(userName + website)
}
// console.log(website)

}

// console.log(userName)

const result =function(value){   //function expression//
    return value+1
}
undefined
result(4)
5
result(122)
123

welcome()
function welcome(){
    console.log("welcome to js")
}

left()
const left=function leaves(){
    console.log("function left")
}
/* So at top when we declared function as with name welcome() and invoked before creation it hoisted 
and return value means it ran, while with second function expression left() it throws error means 
you cannot hoisted or invoke before creation of function expression */