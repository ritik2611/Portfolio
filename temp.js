function getCelcius(){
    const temp_F = document.querySelector('input').value;
    document.querySelector('input').textContent
   const c = (temp_F - 32) * (5/9);
   console.log(c + " Celcius");    
}
