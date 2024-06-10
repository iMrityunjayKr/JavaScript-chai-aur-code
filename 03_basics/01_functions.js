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

console.log(loginUserMessage("Mrityunjay"))