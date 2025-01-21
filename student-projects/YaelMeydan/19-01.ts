const numbers: number[] = [];
let userInput = prompt("Please enter one number at a time");
while (userInput !== null) {
    numbers[numbers.length] = Number(userInput);
    userInput = prompt("Please enter a number");
}
for (let i = 0; i < numbers.length; i++) {
    let UserEntrydisplay: number = prompt("Enter a number from 0 - number of the previous entries,in order to show the number you typed on that same entry.");
    if (UserEntrydisplay < numbers.length) {
        alert(numbers[UserEntrydisplay]);
        break;
    }
    /*  else if(UserEntrydisplay > 0){
            alert(numbers[UserEntrydisplay]);
        }
    */
    else {
        alert("The number you chose is larger than the amount of entries you made, or under 0. please choose again.");
        UserEntrydisplay = prompt("Enter a number from 0 - number of the previous entries, in order to show the number you typed on that same entry.");
    }
}
