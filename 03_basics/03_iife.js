//Immediately invoked function Expression IIFE //
/* Global scope ke pollution se problem hoti hai kayee baar
Many times problems arise due to pollution of global scope*

way of declaring IIFE function */
(function chai(){
    //named iife
    console.log("IIFE")

})();
(()=>{
    //unnamed iffe
    console.log("Immediately invoked function Expression in js ")
})();

/* so remember so far we invoked funcyions but doesn't know actually where to stop context */

// /next is parametrized iife
( (name)=>  {
   console.log(`DB Connected by ${name}`) 
}
)("abid");

