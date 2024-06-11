let a = 10
const b = 20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);


//Nested scope.

function one(){
    username = "Mrityunjay"
    
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // can't access this because the scope of varible in not available in this block.

    two()
}

// one()

if (true){
    const username = "Mrityunjay"
    if(username === "Mrityunjay: "){
        const website = " youtube "
        // console.log(username + website);
    }
    // console.log(website)
}
// console.log(username);

console.log(addone(5))
function addone(num){
    return num+1
}

const addingTwo = function (num){
    return num + 2
}

addingTwo(10)

