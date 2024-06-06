const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));
const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(4));


const hundreds = 1000000000
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++ Maths ++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.pow(4,2))

console.log((Math.random()*10)+1) // gives value betwee 0 and 1.

//want a random no between 10 and 20.
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+ min)
