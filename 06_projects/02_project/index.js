const forms = document.querySelector('form')

forms.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    
    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please mention the correct height`
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please mention the correct weight`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = bmi
    }
    
})