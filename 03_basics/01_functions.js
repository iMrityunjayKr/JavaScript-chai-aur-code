function sayMyName(){
    console.log("Mrityunjay")
}

// sayMyName()

function addTwoNumber(number1, number2){
    // console.log(number1 + number2)
    return number1 + number2
}
const result = addTwoNumber(5,8)
// console.log(result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Mrityunjay")) // this will not return anything because function's return is not saved anywhere and so it is not returning anything.

// console.log(loginUserMessage("Mrityunjay"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500,600,800)); 

const user = {
    user_name : "Mrityunjay",
    prices : "399"
}
function handleObject (anyobject)
{
    console.log(`Username is ${anyobject.user_name} and price is ${anyobject.price}`)
}// handleObject(user)
handleObject({
    user_name : "Mrityunjay",
    price: 599
})

const myNewArray = [300, 400, 500, 600, 700, 800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
