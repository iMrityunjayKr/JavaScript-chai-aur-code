class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username} `);
        
    }
}

const chai = new Teacher("chai", "chai@teacher.com","password")
chai.addCourse();
chai.logMe(); //chai can access logMe coz Teacher extends User.
const masalachai = new User("masalachai")
// masalachai.addCourse() // User does not have the access of addCourse coz it is created by Teacher

masalachai.logMe()

//Notes: as everythis was performed with the help of classes, so we did not require the call keyword.
