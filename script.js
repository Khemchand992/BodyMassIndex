const form=document.querySelector('form')

form.addEventListener('Submit', function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value)
    const bmiResult=document.querySelector('#bmiresult-div')
    bmiResult.innerHTML=weight;
})