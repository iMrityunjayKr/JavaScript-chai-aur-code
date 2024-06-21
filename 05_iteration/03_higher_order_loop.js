// These are array specific loops.
//for of

//Array can have both strings, as well as objects.
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);    
}
const greetings = "Hello World!"
for (const greet of greetings)
    {
        // console.log(`Each char is : ${greet}`);
    }

//Map data types ==> map has unique value and data is stored in the sequence order.
const map = new Map()
map.set('IN', 'India')
map.set('Fr', 'France')
map.set('JP', 'Japan')
// console.log(map);
for (const key of map) {
    //  console.log(key);
}
for (const [key, value] of map) {
    // console.log(key, ":- ",value);
}
const myObj = {
    'game1':"NFS",
    'game2' : "Spideman"
}
// for (const [key,value] of myObj) {
//     console.log(key, " :-", value);
// }
//ForIn loop 
// for (const key in ) {
//     }

const programmingObject = {
    js: "javascript",
    rb: "ruby",
    cpp:"c++",
    swift: "swift by apple"
}
for (const key in programmingObject) {
    // console.log(`Shortcut for ${programming[key]} is : ${key} `)
}
const programmingArray = ['js', 'ruby', 'cpp', 'swift']
for (const key in programmingArray) {
    // console.log(key);
}

const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach(function (item){
    //console.log(item)
    }) 
coding.forEach((item)=>{
    // console.log(item);
})
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})
const myCoding = [
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName: "java"
    },
    {
        languageName:"python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})