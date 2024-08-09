const randomColor = function (){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){        
        color += hex[Math.floor(Math.random()*16)];        
    }
    return color;
};
// console.log(randomColor());

const startChangingColor = function(){
    document.querySelector('#changeColor').style.backgroundColor = randomColor();
    // console.log("clicked")
}

let intervalId;

document.querySelector('#start').addEventListener('click',function(){
    if(!intervalId){
    intervalId = setInterval(startChangingColor,1000)}
});

const stopChangingColor = function(){}
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId = null;
});
