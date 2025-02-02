function HandleCancel(){
    alert("Enjoy your day :)");
    throw new Error();
}

let userInput = prompt("Hey what's your name?");

while (userInput === "" || !isNaN(userInput)){
    if (userInput === null){        
    HandleCancel();
} 

    alert("Please enter a valid name.");
    userInput = prompt("Hey what's your name?");

}
alert("Hello " + userInput + "!");



const quitFunction = prompt("welcom to my game\nfor playing just press enter in your keyboerd or write something\nif you want already to quit please click the cancel button");
if (quitFunction === null){
    HandleCancel();
}
alert("enjoy the game");

let sumNumbers = 0;
let numbersToRead = prompt("how many numbers do you want to input?");

while(numbersToRead === "" || isNaN(numbersToRead) || numbersToRead <= 0){
    if (numbersToRead === null) {
        HandleCancel();
    }
        alert("plaese enter just a valid number (not an empty line)");
        numbersToRead = prompt("how many numbers do you want to input?");
}
    alert("you chose " + numbersToRead + " numbers");


for (let i = 0; i < numbersToRead; i++) {
    const numberToAdd = Number(prompt("please enter a number"));
    
    const userChoise = Number(numberToAdd);
    
    if (numberToAdd === null){
        HandleCancel();
}
    if (isNaN(userChoise)) {
        alert("please enter a valid number. ");
        i--;
    } else {
        sumNumbers += userChoise;
    }
}
const average = sumNumbers / numbersToRead;
alert("The average is: " + average);