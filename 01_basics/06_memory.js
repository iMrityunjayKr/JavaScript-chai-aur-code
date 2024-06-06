//Stack (Primitive: value ki copy milti hai.), Heap(Non-Primitive: value ki reference milti hai.)
let myYoutubename =  "travellingbytes"
let anothername = myYoutubename
anothername = "Lets Grow Together"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "mrityunjay@google.com",
    name : "Mrityunjay Kumar",
    city : "Giridih"
}

let userTwo = userOne

userTwo.email = "mrityunjay@remote.com"

console.log(userOne.email)
console.log(userTwo.email)