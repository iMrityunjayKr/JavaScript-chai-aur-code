// the value which are already assumed to be falsly.
//false, 0, -0, BigInt 0n, "", null, undefined, Nan
// the value which are already assumed to be truthy value.
//"0", 'false', " ", [], {}, function(){}

const userEmail = []
if (userEmail){
    console.log("Got the user email")
}
else{
    console.log("Don't have the user email")

}

if (userEmail.length === 0)
    {
        console.log("Array is empty.")
    }
const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
    {
        console.log("Object is empty.")
    }

//Nullish coalescing operator (??) : made only for null underfined
let val1;
// val1 = 5??10
// val1 = null ?? 10
val1 = undefined ?? 15 
console.log(val1)

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");


