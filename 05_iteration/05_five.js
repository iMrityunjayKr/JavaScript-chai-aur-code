const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num) => {return num + 10})

// console.log(newNums);
const newNumsTwo = []

myNumbers.forEach((num)=>{
    if(num=>0){
        newNumsTwo.push(num+10)
    }
})

// console.log(newNumsTwo)

const newNumsThree = myNumbers
                            .map((num)=> num * 10)
                            .map((num)=> num + 5)
                            .filter((num)=>num>50)
console.log(newNumsThree);