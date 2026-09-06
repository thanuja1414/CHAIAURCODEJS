const score = 400
console.log(score)


//defined as an object
const balance = new Number (550)
console.log(balance)


console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 233.5674
console.log(otherNum.toPrecision(3))
console.log(otherNum.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

//math is a library that is by default available in JS

console.log(Math)

console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.7))
console.log(Math.sqrt(64))
console.log(Math.min(0,5,67,7))

console.log(Math.random()) // value always range from 0 to 1
console.log(Math.floor((Math.random()*10)+1)) // 1 is added to avoid 0


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min) //+1 is written to avoid 0 to occur