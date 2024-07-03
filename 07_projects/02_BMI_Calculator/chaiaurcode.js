const form = document.querySelector('form')
//this usecase will give you empty
//const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    if (height === '' || height <0 || isNaN(height)){
        results.innerHTML = `Please give a valid height`        
    } if (weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight`        
    } 

        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
    
    
    
    if(bmi <=18.6){
        display.innerHTML = `<span>You are under-weight</span>`
    } else if(bmi > 18.6 && bmi<=24.9){
        display.innerHTML = `<span>Your BMI lie in the normal range.</span>`
    } else {
        display.innerHTML = `<span>You are over-weight</span>`
    }
    

})