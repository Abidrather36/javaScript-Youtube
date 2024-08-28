let marvel_heroes=["thor","IronMan","DeadPool"];
let dc_heroes =["Batman","Flash","Superman"]
// console.log(marvel_heroes.push(dc_heroes))
// console.log(marvel_heroes[3][0])

// [ 'thor', 'IronMan', 'DeadPool', [ 'Batman', 'Flash', 'Superman' ] ]

/* so for padding two array first we saw .push(),what it did was it nested 
an array with an array but we wanted a single array so instead to doing push(),Another
difference is push() will put an array into an existing array ,while .concat() will give 
us new array. we will do .concat() it will result a single array  as show below * Also there 
is another operator called rest operator it will also work like concat it will return a single 
array instead of array withan an array */    

// let allHeroes=[...dc_heroes,...marvel_heroes]
// console.log(`All Heroes ${allHeroes}`)

// All Heroes Batman,Flash,Superman,thor,IronMan,DeadPool
// let newArr=marvel_heroes.concat(dc_heroes)
// console.log(newArr)
// [ 'thor', 'IronMan', 'DeadPool', 'Batman', 'Flash', 'Superman' ]

const arr =[1,2,3,4,[5,6,[7,8[9,10]]]]
const flatAllArrays =arr.flat(Infinity)
console.log(flatAllArrays)
// [ 1, 2, 3, 4, 5, 6, 7, undefined ]
/* in order to make it single readable array we have to use .flat with array
it will flaten the array within a single array even if it is nested so many times */  


/* Array.isArray and Array.from two methods of array one returns bool checks if given variable 
is array or not ,another one converts a variable into an array as done below but in objects 
it will return empty because you have key convert both name and value */
 
let name="Abid"
console.log(Array.from(name))
 ['A', 'b', 'i', 'd']
console.log(Array.from({name:"ABID"}))
 []
 