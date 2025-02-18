function divide(a : number, b : number){
    if(b === 0){
        alert("cant divide by zero!");
    }
    
    else{
        alert(a/b);
    }
    
    }
    
    function firstLetter(string : string) : string{
    
    
        return string.slice(0,1).toUpperCase() + string.slice(1);
    
    }