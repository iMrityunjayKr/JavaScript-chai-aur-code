//Array
const myArr = [0, 1, 2, 3, 4, 5]

const myHeroes = ["shaktimarn", "naagraj"]

const myarr2 = new Array (1, 2, 3, 4, 5)
// console.log(myArr[1])

//Array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()         
// myArr.pop()

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

//splice and slice

// console.log("Array before slice : ", myArr)
// const myn1 = myArr.slice(1,3)
// console.log("Sliced part : ",myn1)
// console.log("Array after slice : ", myArr)


console.log("Array before splice : ", myArr)
const myn2 = myArr.splice(1,3)
console.log("Spliced part : ",myn2)
console.log("Array after splice : ", myArr)

