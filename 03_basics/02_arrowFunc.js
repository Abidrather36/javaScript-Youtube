const user ={
    username:"abidnaseer",
    email:"abid@anterntech.com",
    pincode:560043,
    welcomeMessage:()=>{
         console.log(`welcome user ${this.username}, with email :${this.email} having picnode :${this.pincode}`)

    }
}
user.username="Sameer12"
user.welcomeMessage();
console.log(this)

function chai(){
    console.log(this)
}
chai()

//Arrow functions //
const func=()=>{
    return "Welcome to Arrow js function"
}
console.log(func())

// Regular Function
function regularFunction() {
    console.log(this);
}

const obj = {
    method: regularFunction
};

obj.method(); // 'this' refers to obj


// Arrow Function
const arrowFunction = () => {
    console.log(this);
};

const obj2 = {
    method: arrowFunction
};

obj2.method(); // 'this' does not refer to obj2; it refers to the outer context


//how to return object from function ,we have to wrap object in ({})//
const funnyArrow=()=> ({username:"abid"})
console.log(funnyArrow())


