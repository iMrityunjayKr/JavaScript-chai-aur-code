//Defining getter setter through properties

function User(email,password){
    this._email = email;
    this._password = password;
    
    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password',{
        get: function(){
            return `${this._password.toUpperCase()}i"mYourBoss`
        },
        set: function(value){
            this._password = value
        }
    })
}
const mrityunjay = new User("mrityunjay@google.com","12456");

console.log(mrityunjay.email);
console.log(mrityunjay.password);
