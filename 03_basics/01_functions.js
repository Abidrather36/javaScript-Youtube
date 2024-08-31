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

function userlogging(username="default"){
    if(username===undefined){
        console.log("please enter your username");
        return ;
    }
    else{
        return `${username} you just logged in`
    }
}
// userlogging()
// "please enter your username"
console.log(userlogging())
// 'Abidrather36 you just logged in