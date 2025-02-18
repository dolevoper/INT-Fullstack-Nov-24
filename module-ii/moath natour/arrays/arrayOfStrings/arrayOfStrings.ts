let userInput = prompt("please enter a name:");

const arrayOfStrings : string[]= []
while(userInput !==  null){

arrayOfStrings[arrayOfStrings.length] = userInput ; 

userInput = prompt("please enter a name:");

}



const number = Number(prompt("please choose the number of the name to print:"));


alert(arrayOfStrings[number - 1]);