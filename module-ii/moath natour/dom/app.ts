let buttons : HTMLButtonElement[] = Array.from(document.querySelectorAll("button"));

 const operators : HTMLButtonElement[] = Array.from(document.querySelectorAll(".operator"));

 const output : HTMLElement | null = document.querySelector(".display");

 let number  = "" ;

 let operand;

 let result ;

 let lastOperator;


 buttons.forEach(button => button.addEventListener("click", function (){

if(!output){
    return;
}


if(!Number.isNaN(Number(button.textContent)) && button.textContent !==  null){
    number += button.textContent;
    
    output.innerText = number;


}

if(button.textContent === "C" ){

output.innerText = "0";
number = "";
result  = undefined;
operand = undefined;

}


if(operators.find(operator => operator.textContent === button.textContent)){
    if(operand){

calculate(lastOperator);
output.innerText = String(result);

    }
operand = Number(output.innerText);
lastOperator = button.textContent;
    number = "";
   

}

if(button.textContent === "="){

// if(result === undefined || operand === undefined){

//     return;
// }
    calculate(lastOperator);
output.innerText = String(result);
operand = undefined;

}


}


 ))


 function calculate(input : string | null){
if(result === undefined){

result = operand;
    
}
console.log(operand)

console.log(input)


switch(input){

case "+":
    result = result + Number(number);
    console.log(result);
    return;

    case "-":
        result = result - Number(number);
        console.log(result);
        return;

        case "/":
            result = result / Number(number);
            console.log(result);
            return;

            case"*":
            result = result * Number(number);
            console.log(result);
            return;

}

console.log(result);


 }
