const fruits = ['apple' , 'mango' , 'banana']
const veggies = ['carrot' , 'beetroot' , 'turnip']



const food = fruits.concat(veggies) //creates a new array
console.log(food) 

const foods = [...fruits , ...veggies] // breakdowns all the elements into single ones and combines them into the array , spreading of elements 
console.log(foods)


fruits.push(veggies) // manipulates the original array
console.log(fruits) 


const arr = [1,2,3,[4,5],6,7,[8,9,[10,11]]]
const arr2 = arr.flat(Infinity) // infinity defines the depth - all the elements are spreadout
console.log(arr2)


console.log(Array.isArray('tanuja')) // check if the input is an array
console.log(Array.from('tanuja')) // converts string into array
console.log(Array.from({name : 'tanuja'})) // interesting case - gives empty string

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))