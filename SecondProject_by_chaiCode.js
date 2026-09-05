const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
  const weight=parseInt(document.querySelector('#weight').value);
  const height=parseInt(document.querySelector('#height').value)
  const result=document.querySelector('#results')
  if (height === '' || height < 0 || isNaN(height)){
    result.textContent=`please give us valid height ${height}`;
  }else if (weight ===' ' || weight < 0 || isNaN(weight)){
    result.textContent=`please give us valid weight ${weight}`;
  }else{
    const bmi=(weight/(height*height)).toFixed(2);
    result.textContent=`your bmi is ${bmi}`;
    if (bmi<18)
    {
      result.innerHTML=`underweight ${bmi}`;
    }
    else{
      result.innerHTML=`overweight ${bmi}`;}
  }
})
