const firstNumber  : number = Number (prompt('type a number: ')); 
const secondNumber : number = Number(prompt('type another number: '));


if(Number.isNaN(firstNumber) || Number.isNaN(secondNumber) ){

    alert( 'input is not a valid number');
}

const operator: string | null = prompt('pick which operation to perfrom: ');




const addition: boolean = operator === '+';
   const subtraction : boolean = operator === '-';
   const multiplication : boolean = operator ==='*';
   const division : boolean = operator ==='/';
   const validOperator = (operator: string | null ): boolean => {
    return addition || subtraction || multiplication || division;
}


 if  (!validOperator(operator)){

alert('please enter a mathematical operation');
}

else{

if (addition){
    alert( firstNumber +secondNumber);
}
else if(subtraction){
    alert( firstNumber-secondNumber);
}
else if(multiplication){
    alert(firstNumber*secondNumber);
}
else if(division && secondNumber!==0){

    alert(firstNumber/secondNumber);}
   else 
    alert('cant divide by 0, please choose another operation');
}





  
  

   





    




