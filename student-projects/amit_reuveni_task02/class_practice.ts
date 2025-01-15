// * divide - Get 2 numbers, print their ratio (/) - handle division by 0

function divide(num1, num2: number) {
    if (num2 === 0){
        alert("Error, Division by zero is not allowed");
    }else{
        let ratio = num1 / num2;
        alert("The ratio is " + ratio);
    }
}
divide(10, 2);
divide(10, 0);






// * capitalize - Get a string, return the same string with the first character as a capital letter

function info(userName_: string){
    return ("Hello " + userName_.slice(0, 1).toUpperCase() + userName_.slice(1) +"!\nHave a good day")
}
alert (info("banana"));








// * superGreet - Get first name and last name, print a greeting with the names capitalized

function names(firstName: string, lastName: string){
    
    const fixedFirstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
    const fixedSecondName = lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
    
    
    alert ("Hello " + fixedFirstName + " " + fixedSecondName + "!\nHave a good day");
}
names("amit", "reuveni");







// * greetFullname - Get the full name of the user, print a greeting with first name and last name capitalized

function finalTask(fullName: string){
    const nameParts = fullName.split(" ");


    const firstName_ = nameParts[0].slice(0, 1).toUpperCase() + nameParts[0].slice(1).toLowerCase();
    const lastName_ = nameParts[1].slice(0, 1).toUpperCase() + nameParts[1].slice(1).toLowerCase();

    alert("hello " + firstName_ + " " + lastName_ + "!\nHave a good day")

}

finalTask("amit reuveni")