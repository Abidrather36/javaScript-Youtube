const userEmail=false
if(userEmail){
    console.log("user email logged in")
}
else{
    console.log("please login")
}

//1) falsy, false,0,-0,"",BigInt on,null,undefined,NaN
//truthy, "0","false"," ",[],{},function(){}

//2)now to check if array is empty and object //
const employeeEmail=[1] 
if(employeeEmail.length ===0)
{
    console.log("array is empty")
}
else{
    console.log("array contains value",employeeEmail[0]);
}

//3) To check Object first we have to use Object.keys inside pass object that will return an array//
const employeeObj={name:"abid"}
if(Object.keys(employeeObj).length ===0){
    console.log("Object is Empty")
}
else{
    console.log("Object contains value",employeeObj.name)
}


//4) Null Coalescing Operator made for Null and undefined//
const employee=null
const user="AbidNaseer"
const userLoggedIN=employee??user
console.log(userLoggedIN)
const val=undefined??"Antern"
console.log(val)
// Antern
const val2=null??10??20
console.log(val2)
// 10

//terniary Operator single line if else
let res=false=={}?true:false
console.log(res)
const balance=10000
const outstandingBal=balance > 5000?console.log("balance is Greater than 5k"):console.log("less than 5k")
console.log(outstandingBal)