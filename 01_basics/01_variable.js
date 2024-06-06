const accountId = 144553
let accountEmail = "mrityunja@gmail.com"
var accountPassword = '12345'
accountCity = "Indore"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "mkr@gmail.com"
accountPassword = "2121211"
accountCity = "Giridih"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var 
because of issue in block scope and funtional scope.
*/