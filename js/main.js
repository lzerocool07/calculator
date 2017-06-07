window.onload = function(){
    var res = document.querySelector('input[name="res"]'),
        btnOn = document.querySelector('input[name="on"]'),
        btnOf = document.querySelector('input[name="of"]'),
        btnNumbers = document.querySelectorAll('input[name="numbers"]');
        
    var string =0;
    
    // on and off calculator
    btnOn.onclick = showCalc;
    btnOf.onclick = hideCalc;
       
    function showCalc(){
        res.value = 0;
    }
    function hideCalc(){
        res.value = '';
    }
    
    
    for(var i = 0 ; i<btnNumbers.length ; i++){
        btnNumbers[i].onclick = function(){
            res.value += this.value;
            string  += res.value;
        };
        
    }
    
     
    
    
    
}