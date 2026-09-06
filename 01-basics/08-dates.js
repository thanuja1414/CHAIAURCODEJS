//dates can be calculated from jan 1 , 1970
//date is also an object
// the people are working on making date usage , much easier by using Temporal , but its still a proposal , it cant be used instead of date.
let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())

console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,23)
let myCreatedDate2 = new Date(2023,11,23,5,3)
let myCreatedDate3 = new Date("01-12-2023")
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate2.toLocaleString())
console.log(myCreatedDate3.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // gives current time in milliseconds 
console.log(Math.floor(Date.now()/1000)) //gives current time in seconds
console.log(myCreatedDate.getTime())

let newDate = new Date()
console.log(newDate.toDateString())
console.log(newDate.getMonth()) // 8 - sept
console.log(newDate.getMonth()+1) // to get exact month instead of index
console.log(newDate.getDay()) // 0 - sunday

//customize the dates how ever you want
newDate.toLocaleString('default',{
    weekday : "long",
})


