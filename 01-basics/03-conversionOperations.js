let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // score despite having string is still converted into number - NaN 


let score2 = null
console.log(typeof score2)
console.log(typeof(score2))

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)


// "33" -> 33
// "33abc" -> NaN
// true -> 1 , false -> 0

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 -> true
// 0 -> false
// empty string -> false
// string -> true

let m = 44;
let stringNumber = String(m)
console.log(stringNumber)
console.log(typeof stringNumber)

//Operations 
let value = 3
let negValue = -value
console.log(negValue)


let str1 = "hello"
let str2 = " tanuja"
let str3 = str1 + str2
console.log(str3)


// the conversion starts from left to right
console.log('1'+2+2)
console.log(1+2+'2')

console.log(+true) // 1
console.log(+"")  // 0

let num1,num2,num3
num1 = num2 = num3 = 2+2

