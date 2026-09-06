const name = 'tanuja'
const age = 22

//string interpolation
console.log(`hi im ${name.toUpperCase()} and im ${age} years old`)

// string is an object - it has key-value pairs

//another way to declare the string is using object creation method
const gameName = new String ('ludoking')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('o'))


const subString = gameName.substring(0,4)
console.log(subString)

const slicedString = gameName.slice(-8,4) // we can use negative values here
console.log(slicedString)

const text = '  tanuja  '
console.log(text)
console.log(text.trim())

const url = "https://tanuja.com/tanuja%gatakala"
console.log(url.replace("%","-"))
console.log(url.includes('tanuja'))

const myName = 'tanu-gatakala'
console.log(myName.split('-')) //returns an array of the words split up , splits based on "-"

