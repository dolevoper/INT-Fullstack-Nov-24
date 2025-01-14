// 2. Student stats
//     * First ask the user which operation he want to perform: max, min
//     * Read student grades using 2 prompts (full name then grade)
//     * Validate grades (0 - 100)
//     * Ask to fix invalid grades
//     * Stop reading students when user clicks "cancel"
//     * Display the student's name according to the requested operation

const oparation = prompt("Which oparation you want to perform?\nmax?\nmin? ")

let userName = prompt("Hey what's your name ?")

while (userName === "" || userName === null || !isNaN(userName)){
    alert("Please enter a valid name")
    userName = prompt("Hey what's your name ?")
}alert("Hello " + userName + "!")

let userGrade = prompt("What is your grade please ?")  
