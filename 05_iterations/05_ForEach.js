// const coding = ["js", "ruby", "java", "python", "cpp"]

// // coding.forEach( function (val){
// //     console.log(val);
// // } )

// // coding.forEach( (item) => {
// //     console.log(item);
// // } )

// // function printMe(item){
// //     console.log(item);
// // }

// // coding.forEach(printMe)

// // coding.forEach( (item, index, arr)=> {
// //     console.log(item, index, arr);
// // } )

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {

//     console.log(item.languageName);
// } )

//Another Scenario is Foreach doesn't return anything lets see example //
// const Heroes=["Alpha","Bravo","Charlie","Adios"]
// const retHeroes=Heroes.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(retHeroes)
// undefined foreach  returns undefined 

// since we can't return from foreach ,so there is a jugaad for this create an array push them into that array/
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArray = []

myNums.forEach((num) => {
    if (num > 4) {
        newArray.push(num)
    }
})
console.log(newArray);


//Mini Project on Filter//

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let scienceBooks = books.filter((bk) => bk.genre === "Science")
console.log(scienceBooks)





//So For Foreach drawback comes Filter to the rescue it returns an array 
const numbers = [1, 2, 3, 4];
// numbers.forEach(num => console.log(num * 2)); // Just logs to console, no return

// const Heroes=["krish","Shaktimaan","Betaal","Hatim"]

// const retHeroes=Heroes.filter((item)=> {
//    console.log(item)
//     return item
// })

// console.log(retHeroes)


/*
  Recap Foreach() takes callback and returns nothing undefined while filter()also takes 
  callback but returns an array instead on a specific condition after that is map() that 
  also takes callback function and returns an array and we can do chaining like map().map().filter

*/

const nums = [1, 2, 3, 5, 6, 7, 8, 9, 10]

const resArray = nums.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 40)

console.log(resArray)



//Reducer()

const arr = [2, 4, 6]

const newArr = arr.reduce((acc, currVal) => {
    console.log(`acc ${acc} currVal ${currVal}`)
    return acc + currVal
}, 2)

console.log(newArr)


//mini Project on reduce//

const shoppingCart = [

    {
        itemName: "Python Course",
        price: 2000
    },
    {
        itemName: "Java Course",
        price: 3000
    },
    {
        itemName: "Dot Net Course",
        price: 4000
    },
    {
        itemName: "Php Course",
        price: 1000
    }

]

const totalPriceOfShoppingCart = shoppingCart.reduce((acc, item) => {
     return acc+item.price
}, 0)

console.log(`Total price Payable of Courses is ${totalPriceOfShoppingCart}`)