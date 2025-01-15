const minRange : number = 17;
const maxRange : number = 33;
const correctNumber : number = Math.floor(Math.random()*(maxRange - minRange) + minRange);
alert('lets play a game! lets see if you can guess my number '  + correctNumber );
alert("you have three Guesses!");
let randomGuess : number = Number(prompt("type a number between " + minRange + " and " + maxRange));


const guessInRange = (guess : number) : boolean =>{
return minRange <= guess && guess <= maxRange ;
}

const guessIsValid = (guess : number) : boolean => {

return !Number.isNaN(guess)
}


const guessIsCorrect = (guess) :boolean => {

return guess === correctNumber ;
}

let amountOfGuesses :number = 3;

const outOfGuesses = (guess : number) : boolean =>{

return guess===0;
}

const meetsAllRequirements = () : boolean => {
return guessIsValid(randomGuess) && guessInRange(randomGuess) ;

}

const aboveOrBelow = () : string =>{
    if(randomGuess > correctNumber){
        return "lower"
    }
    else {
        return "higher"
    }
} 


for (amountOfGuesses = 2 ; amountOfGuesses >= 0 &&!guessIsCorrect(randomGuess) && meetsAllRequirements(); amountOfGuesses--){
    if(outOfGuesses(amountOfGuesses)){
        alert("no more guesses, you lose!");
    }
    else{ 
randomGuess = Number(prompt( "incorrect! lets try again. tries left: " + amountOfGuesses + " This time try a " + aboveOrBelow() + " number"))
    }

}
if (guessIsCorrect(randomGuess)){
    alert("You got it! " + randomGuess + " is the right guess!");  
}

