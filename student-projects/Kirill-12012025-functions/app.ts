alert("Let's divide numbers");
const firstNumber = Number(prompt("Choose your first number"));
const secondNumber = Number(prompt("Choose your second number"));
const result = firstNumber / secondNumber;

if(firstNumber/0){
        alert(firstNumber);
       else{
            alert("The result is " + result);
    }
    
}

let userName = prompt("Choose your username");
if(userName === ""){
    alert("Please choose a username")
    else(){
        alert(userName.toUpperCase());
    }
}

