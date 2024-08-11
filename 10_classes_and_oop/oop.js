const user = {
    username : "Mrityunjay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function (){
        console.log("Got user details from database");
        // console.log(`Username: ${username}`); -- not able to find which username we are referring to.
        console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}
// console.log(user.getUserDetails());

//Constructor Function

// const promiseOne = new Promise();// new keyword is constructor function - it allows us to make multiple instances from one object literal.



function  User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function (){
        console.log(`Welcome ${this.username}`)
    }



    return this // this is implicit. It is returned anyway.
}


// const userOne = User("Mrityunjay", 12, true) ;
// const userTwo = User("Mithu",11, false);
/* As we are creating direct userOne and UserTwo, so it overites the value. 
so, we use constructor function {new keyword} to create new instances everytime.
*/
const userOne = new  User("Mrityunjay", 12, true) ;
const userTwo = new User("Mithu",11, false);

// console.log(userOne);
// console.log(userTwo);
console.log(userTwo.greeting());
console.log(userTwo.constructor);

