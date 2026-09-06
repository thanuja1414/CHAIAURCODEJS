// in JS arrays copy operations perform shallow copies (the copy shares the  same reference point- like heap) rather than deep copies (the copy  doesnt share same reference  point - like stacks)

//arrays , strings and number obj have prototypes
const arr1 = [1,2,3,4]
const arr2 = ['tanuja' , 'manu']
const arr3 = new Array(23,34,54,67,78)

console.log(arr3[1])
arr3.push(5)
console.log(arr3)
arr3.pop()

arr3.unshift(0) // adds elements at the start
arr3.shift() // removes elements at the start
console.log(arr3)

console.log(arr3.includes(9))
console.log(arr3.indexOf(34))

const newArray = arr3.join()
console.log(arr3)
console.log(newArray)
console.log(typeof newArray)

//slice and splice

console.log('A', arr3)
const myn1 = arr3.slice(1,3)
console.log(myn1)
console.log('B',arr3)
const myn2 = arr3.splice(1,3)
console.log('C', arr3) // splice manipulates the original array
console.log(myn2)

