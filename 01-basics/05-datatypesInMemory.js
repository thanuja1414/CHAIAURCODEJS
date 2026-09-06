
//primitives
let person1 = 'tanuja'
let person2 = person1
person2 = 'priya'

console.log(person1)
console.log(person2)


//non-primitives
let userOne = {
    email : "user1@gmail.com",
    gender : "F"
}

let userTwo = userOne

userTwo.gender = "M"

console.log(userOne.gender)
console.log(userTwo.gender)
