
const minRange : number = 3;
const maxRange : number = 17;



const isInRange = (num : number) : boolean =>{
return num >= minRange && num <= maxRange;
}

const validateNumber = (input : number) : boolean =>{
    return !Number.isNaN(input);
}



let randomNumber : number = Math.floor(Math.random()*17) + 1;
alert('lets play a game, i have a random number in mind, can you guess my number?');
let randomGuess : number | string = Number(prompt("type a number between " + minRange + " and " + maxRange));
// const correctGuess : boolean = randomGuess === randomNumber;

while(!validateNumber(randomGuess) || !isInRange(randomGuess)){

    if(validateNumber(randomGuess)){

alert("obviously thats wrong, you don't need me to tell you that do you? i said between  " + minRange + " and " + maxRange);
randomGuess = Number(prompt('lets try again, type a number between 1  and 10'))
}

else if (!validateNumber(randomGuess)){
    alert( 'please enter a valid number');
     randomGuess = Number(prompt("type a number between " + minRange + " and " + maxRange ))
}
}
let correctGuess : boolean = randomGuess === randomNumber;

    if(correctGuess){

        alert('Good guess!');
        }
        
        else {
        
            alert( randomGuess + " is incorrect! " +  "it was " + randomNumber + " Better luck next time" );
           
        }

