// import { difficulty } from "./modules/dist/settings.js"
const difficulty = function (mode: number) {
  switch (mode) {
    case 5:
      return 5;
    case 3:
      return 3;
    case 1:
      return 1;
  }
};
function range(num) {
  return Math.floor(Math.random() * num);
}

function mainMenu(input: number) {
  if (input === 1) {
    const tryNum = difficulty(
      Number(
        prompt(
          "Starting new game! please choose diffiuclty(enter num of tries): easy - 5/ normal -3/ hard -1"
        )
      )
    );
    const randomN = range(Number(prompt("Choose range 1-100")));
    for (let i = 1; i <= tryNum; i++) {
      alert("this is your " + i + " try");
      const newTry = Number(prompt("Choose a number between 1 - 100"));
      if (isNaN(newTry) || newTry > 100 || newTry === 0 || newTry === null) {
        alert("enter a valid number");
        i = i - 1;
      } else if (newTry > randomN) {
        alert(
          "Your number is above the random number, the random number is " +
            randomN
        );
      } else if (newTry < randomN) {
        alert(
          "Your number is below the random number, the random number is " +
            randomN
        );
      } else {
        alert("you won!");
        alert("new game is loading");
        GuessGameNew();
     }
}
} else if (input === 2) {
  const tryNum = difficulty(
    Number(
      prompt(
        "Starting new game! please choose diffiuclty(enter num of tries): easy - 5/ normal -3/ hard -1"
      )
    )
  );
  const randomN = range(Number(prompt("Choose range 1-100")));
  for (let i = 1; i <= tryNum; i++) {
    alert("this is your " + i + " try");
    const newTry = Number(prompt("Choose a number between 1 - 100"));
    if (isNaN(newTry) || newTry > 100 || newTry === 0 || newTry === null) {
      alert("enter a valid number");
      i = i - 1;
    } else if (Math.abs(newTry-randomN) > 10) {
      alert(
        "cold, the random number is " +
          randomN
      );
    } else if (Math.abs(newTry-randomN) < 10) {
      alert(
        "hotter, the random number is " +
          randomN
      ); } 
    else {
      alert("you won!");
      alert("new game is loading");
      GuessGameNew();
   } 
   }
}  else {
  alert("reloading");
  GuessGameNew(); 
}
}


function  GuessGameNew(){
  const firstMesssage = Number(
    prompt(
      "Welcome to out Guess game!Choose (write): \n" +
        "New game: above|below press 1\n" +
        "New game: hot|cold 2\n" +
        "Quit(reload the page): press cancel"
    )
  );
  if (firstMesssage === null) {
    alert("Reloading game");
    location.reload();
  } 
  mainMenu(firstMesssage);
}
GuessGameNew(); 

