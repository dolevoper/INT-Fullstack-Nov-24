 function firstLetter(string : string) : string{


        return string.slice(0,1).toUpperCase() + string.slice(1);
    
    }
    
    function checkForNull (Name : string | null) : string {
    
    if(Name === null){
        Name = "guest";
    }
    else {
        Name = firstLetter(Name);
    }
    
    return Name;
    
    }
    
    const Name = prompt("What is your name?")
    
    
    alert("Hello " + checkForNull(Name) + "!");
    