//Dates
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(typeof myDate)


let myCreatedDate = new Date(2024, 0o5, 0o7)

console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.toDateString())
console.log(newDate.getDate())
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday: "short"
}))