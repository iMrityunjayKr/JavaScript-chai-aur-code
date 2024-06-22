//Reduce method
const myNums = [1,2,3]
const myTotal = myNums.reduce(function (acc, currentValue) {
    // console.log(` accumulator : ${acc} and currentValue : ${currentValue}`)
    return acc + currentValue
}, 7)
// console.log(myTotal);

const myTotalTwo = myNums.reduce((acc,currentValue)=> acc + currentValue, 0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "datascience course",
        price : 12999
    },
]
totalPriceToPay = shoppingCart.reduce((acc,item)=>acc + item.price, 0)
console.log(totalPriceToPay);