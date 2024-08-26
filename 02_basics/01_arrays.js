
/*in Javascript when we do copy operations ,it creates shallow copies
Shallow Copy of an Object is a copy whose properties share the same references
as those of the Source Object means when you change either the source or copy it will change
the original One.

Deep Copy of an Object is a copy whose properties do not share the same references  as those 
of the Source Object from which the copy was made.*/

/// Arrays Declaration//
let myArr=[0,1,2,3,4,5]
const heroes=["Shakitmaan","Spiderman","Thor","Batman"]
let obj = new Array(10,20,30,40,50)
// console.log(obj[2])

  // Array Methods//
//   myArr.push(6)
//   console.log(myArr)
//   myArr.pop()
//   console.log(myArr)

//   myArr.unshift(6)   insertion at the starting 
//   console.log(myArr)

    //  myArr.shift()    deletion at the starting 
    //  console.log(myArr)

//    console.log( myArr.includes(6))  returns true or false questions the array 
    
//  console.log(myArr.indexOf(6)) returns -1 because it not present in an array
// console.log(myArr.indexOf(5))

// const joinedArray =heroes.join()
// console.log(heroes)
// console.log(joinedArray)

// console.log(typeof joinedArray)

//Arrays Slice and Splice

const arr= [1,2,3,4,5,6]
const resArrsliced =arr.slice(1,3)
console.log(`sliced array ${resArrsliced}`)
console.log(`original array after slice ${arr}`)

const secArr =[1,2,3,4,5,6]
const resArrSpliced = secArr.splice(1,3)
console.log(`Spliced Array is ${resArrSpliced}`)
console.log(`original array after Splice is ${secArr}`)



