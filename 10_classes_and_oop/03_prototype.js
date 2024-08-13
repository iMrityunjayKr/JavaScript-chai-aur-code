let myName = "Mrityunjay        "

// console.log(myName.truelength);
/* now the problem is I want the the true length of the string but there is no inbuilt method for the same. so want to create a method that get's injected to all OBJECTS for future usage.
Let's see how can we do that. */


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.mrityunjay= function () {
    console.log(`I am present in all objects`);
    
} // as prototype is defined for all objects, it is accessible to array, string and everything.

// heroPower.mrityunjay();
// myHeros.mrityunjay();

Array.prototype.heymrityujay = function(){
    console.log(`I'm present everywhere`);
    
}

// heroPower.heymrityujay();// heymrityunjay is defined only for arrays so here it is not accessible.
// myHeros.heymrityujay();

//inheritance

const User = {
    name: "chai",
    gmail: "chai@gmail.com"
}

const Teacher = {
    makeVideo:true

}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
    
}

Teacher.__proto__= User;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// let's solve our first problem.

let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)    ;
}
anotherUsername.trueLength();
"My name is Mrityunjay Kumar       ".trueLength();