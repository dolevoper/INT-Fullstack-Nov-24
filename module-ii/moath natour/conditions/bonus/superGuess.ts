let valitdateAmountOfGuesses = (input : number, max : number) : number =>{
    while(input >= max || (input<= 0) || Number.isNaN(input) ){
        input= Number(prompt("input is invalid, cant be less than or equal to 0 and cant be greater than or equal to " + max + " and it must be a valid number"));
    }
    return input;
    }

    let validateInput = (input : number) : number =>{

        while(Number.isNaN(input)){
            input = Number(prompt("not a valid number!"));
        }
    
        return input;
    }

    let inputIsValid  = (input : number) : boolean=>{
        return !Number.isNaN(input)
    }
    let inputInRange= (input : number) : boolean =>{
        return input>= minRange && input<= maxRange;
    } 

    let validateMinMax = (min : number, max : number) :number =>{
while(min >= max || Number.isNaN(max)){
max = Number(prompt("ending number cant be lesser or equal to starting number and it must be a valid number"))
}
return max;
    }

let minRange : number = Number (prompt("choose starting number: "));
minRange = validateInput(minRange);

let maxRange : number = Number(prompt("choose ending number: "));
 maxRange = validateMinMax(minRange, maxRange);


let amountOfGuesses : number = Number(prompt("choose how many guesses you will have: "));
amountOfGuesses = valitdateAmountOfGuesses(amountOfGuesses, maxRange);


const correctGuess : number = Math.floor(Math.random() * (maxRange-minRange)+ minRange + 1);
let randomGuess : number = Number(prompt("type a number between " + minRange +  " and " + maxRange + " "+ correctGuess));

const outOfGuesses : boolean = amountOfGuesses === 0;

const guessIsCorrect = () : boolean =>{
    return randomGuess === correctGuess;
}

const tryValidGuess = (guess : number) : number =>{

    while(!inputIsValid(guess) || !inputInRange(guess)){

                if(!inputIsValid(guess)){

             guess= Number(prompt("input is invalid, please type a Number: "));
                }

                                        if(!inputInRange(guess) && inputIsValid(guess) ){

                                    guess = Number(prompt("input is out of range, please choose a number between " + minRange + " and " + maxRange));
     
                                   }

                                                         } 
return guess;
}

for( amountOfGuesses  = amountOfGuesses -1; amountOfGuesses>0 && !guessIsCorrect(); amountOfGuesses--){

if(!outOfGuesses && !guessIsCorrect()){
    tryValidGuess(randomGuess);    
    randomGuess = Number(prompt("incorrect! you have " + amountOfGuesses + " guesses left"))
    tryValidGuess(randomGuess);
}

}

if(guessIsCorrect()){
    alert("what a guess! that is correct!  the number is " + randomGuess);
}

else{
    alert("unlucky! out of guesses. better luck next time!");
}


