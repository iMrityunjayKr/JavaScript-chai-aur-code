//const tinderUser = new object() //=> singleton object

const tinderUser = {}
tinderUser.id =  "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Mrityunjay",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname?.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj3 ={obj1, obj2}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

console.log(obj4)

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    },
    {
        id: 3,
        email: "i@gmail.com"
    },

]
console.log(users[1].email);

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log( typeof Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIN'))