//Immediately invoked function expression
(function chai(){
    //named iife
    console.log(`DB connected`);
}
)();
((name)=>{
    //unnamed iife
    console.log(`Hey ${name}, DB connected  `);
})("Mrityunjay")