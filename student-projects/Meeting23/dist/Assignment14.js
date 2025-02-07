// question 1
// const name = "Omer";
// function greet() {
//     console.log(name);
// }
// greet();
// question 2
// const name = "Omer";
// function greet(name: string) {
//     console.log(name);
// }
// greet("Dolev");
//question 3 
// const name = "Omer";
// function app() {
//     const name = "Omer Dolev";
//     greet();
//     function greet() {
//         console.log(name);
//     }
// }
// app();
//question 4
const name = "Omer";
function createGreeter(name) {
    function greet() {
        console.log(name);
    }
    return greet;
}
const greetMe = createGreeter("Buzz");
greetMe();
