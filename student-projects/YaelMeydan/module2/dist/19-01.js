var numbers = [];
var userInput = prompt("Please enter one number at a time");
while (userInput !== null) {
    numbers[numbers.length] = Number(userInput);
    userInput = prompt("Please enter a number");
}
for (var i = 0; i < numbers.length; i++) {
    var UserEntrydisplay = prompt("Enter a number from 0 - number of the previous entries,in order to show the number you typed on that same entry.");
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
