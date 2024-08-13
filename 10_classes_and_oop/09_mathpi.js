const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai : function(){
        console.log("chai nhi banega");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'))

Object.defineProperty(chai, 'name', {
    writable: false,
  enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

chai.name = 'masala chai';
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

// for(let [key,value] of chai){
//     console.log(`${key}, ${value}`);    
// }//error as chai(object is not iteratable) 

//object is iterable or not depends on the different situation

for(let [key,value] of Object.entries(chai)){
    if (typeof value != 'function')
        {
            console.log(`${key}, ${value}`);  
        }
      
}
