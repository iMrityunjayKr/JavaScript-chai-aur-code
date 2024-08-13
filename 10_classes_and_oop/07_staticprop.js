class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
     static creatId(){
        return '123'
    }
}

const mrityunjay = new User("mrityunjay")

//  console.log(mrityunjay.creatId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@iphone.com");

iphone.logMe()

// console.log(iphone.creatId());//static keyword prevents accessing createId().

console.log(User.creatId())// createId() is only accessible for classes.
/*
Note:
static keyword strict accessibility limited to classes only. it is not available to any instances.
*/