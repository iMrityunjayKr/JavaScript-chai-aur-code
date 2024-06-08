//singleton
//object literal


const mySym = Symbol("key1")

const JsUser = {
    name : "Mrityunjay",
    "full name" : "Mrityunjay Kumar",
    [mySym] : "mykey1",
    age : 23,
    location : "Indore",
    email: "mrityunjay@google.com",
    isLoggedIN: false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log  (JsUser[mySym])
// console.log(JsUser)

JsUser.email = "mrityunjay@remote.com"
// console.log(JsUser)
// Object.freeze(JsUser)
// JsUser.email = "mrityunjay@linkedin.com"

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo())