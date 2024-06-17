const user = {
username: "Mrityunjay",
price: 999,
welcomeMessage: function(){
console.log(`${this.username}, welcome to website`);
console.log(this);
    }   
}

// user.welcomeMessage()
// user.username="Dolly Sharma"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "Mrityunjay"
//     console.log(this.username)
// }
// chai()


// const chai = function(){
//     let username = "Mrityunjay"
//     console.log(this.username)
// }
// chai()

const chaiOne = () =>{
    let username = "Mrityunjay"
    console.log(this)
}
// chaiOne()

// const addTwoNos=(num1, num2)=>{
//     return num1 + num2
// }
// const addTwoNos=(num1, num2)=> num1 + num2

// const addTwoNos=(num1, num2)=> (num1 + num2)
const addTwoNos=(num1, num2)=> ({username: "Mrityunjay"})

console.log(addTwoNos());
