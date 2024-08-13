class User{
    constructor(email, password){
        this.email = email;
        this.password = password;

    }
    get email(){
        return `${this._email.toUpperCase()}`;
    }
    set email(value){
        // this.email = value// this gives error coz this is not able to understand what to do, eg. uppar ka this.email ko dekhu aa setter vale ka this.email. so we introduce a new variable here.
        this._email = value
    }
    get password(){
        return `${this._password.toUpperCase()}heyUdon'tknowme`
    }
    set password(value){
        this._password = value
    }
}
const mrityunjay = new User("mrityunjay@gmail.com","123")
console.log(mrityunjay.email);
console.log(mrityunjay.password);
