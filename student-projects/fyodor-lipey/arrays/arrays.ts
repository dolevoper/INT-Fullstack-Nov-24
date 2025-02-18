// 1. Read string from the user until the user hits cancel. Ask the user for a number (N). Alert the Nth string DONE
// 2. Read 10 numbers. Alert all the numbers in ascending order (one alert or multiple) (don't use array methods)
// 3. Read a number (N). Read N numbers. Print the median (if N is odd then (N + 1)/2 else the average of N/2 and N/2 + 1)
// 4. Create a function that accepts an array of number and returns the 2 smallest numbers
// 5. Create a grade recording system
//     - the user should be able to record new grades
//     - the user should be able to see all the existing grades (single alert)
//     - the user should be able to remove grades
//     - the user should be able to get stats (min, max, avg, mid)
//     - the user should be able to quit the program
// 6. Bonus! do 5, but for each grade also record the class

//1
const words: string[] = [];
let usersWord = prompt("please write a word, press cancel to stop");

while (usersWord !== null) {
  words.push(String(usersWord));
  usersWord = prompt("please write a word");
}
alert(words.length);
const indexOfWord = prompt("choose the number of the word");

if (words.length < Number(indexOfWord)) {
  alert(words[words.length - 1]);
} else {
  alert(words[Number(indexOfWord)]);
}

//2

const numbers: number[] = [];

for (let i = 0; i < 10; i++) {
  const num = prompt("enter a number");
  numbers.push(Number(num));
}

alert(numbers);

function returnMin(array: number[]) {
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
alert(returnMin(numbers));

function replaceMin(array: number[]) {
  let min = returnMin(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === min) {
      array[i] = Infinity;
    }
  }
  return array;
}

function NewAscendingArray(array: number[]) {
  const numbersAscend: number[] = [];
  for (let i = 0; i < array.length; i++) {
    numbersAscend[i] = returnMin(array);
    array = replaceMin(array);
  }
  return numbersAscend;
}

alert("ascending " + NewAscendingArray(numbers));

// 3
const numbers: number[] = [];
const numberOfNumbers = prompt("choose a number of numbers");
for (let i = 0; i < Number(numberOfNumbers); i++) {
  const num = prompt("enter a number");
  numbers.push(Number(num));
}
alert(numbers);
function CalcMedianIndex(number: number, array: number[]) {
  if (number % 2 === 0) {
    const medianIndex = (number + 1) / 2;
    const medians: number[] = [Math.floor(medianIndex), Math.ceil(medianIndex)];
    const median =
      (array[Math.floor(medianIndex) - 1] + array[Math.ceil(medianIndex) - 1]) /
      2;
    return median;
  } else {
    const medianIndex = (number + 1) / 2;
    const median = array[medianIndex - 1];
    return median;
  }
}
alert(CalcMedianIndex(Number(numberOfNumbers), numbers));

//4

const numbers: number[] = [];

for (let i = 0; i < 7; i++) {
  const num = prompt("enter a number");
  numbers.push(Number(num));
}

alert(numbers);

function twoMinNums(array: number[]) {
  function returnMin(array) {
    let min = Infinity;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }

  function replaceMin(array) {
    let min = returnMin(array);
    for (let i = 0; i < array.length; i++) {
      if (array[i] === min) {
        array[i] = Infinity;
      }
    }
    return array;
  }

  const minNums: number[] = [];
  for (let i = 0; i < 2; i++) {
    minNums[i] = returnMin(array);
    array = replaceMin(array);
  }
  return minNums;
}

alert("lowest nums are " + twoMinNums(numbers));

// 5 only did max and min
const Operation = prompt("Need max or min grade?\n" + "Choose MAX/MIN");
if (Operation === null) {
  alert("Stoping");
  location.reload();
} else if (Operation === "MIN" || Operation === "min") {
  const grades = [];
  let min = Infinity;
  let StudentName = prompt("Student's name");
  while (StudentName !== "null" && isNaN(Number(StudentName))) {
    const Name = StudentName;
    const Grade = Number(prompt("enter a grade between 0-100"));
    const mark = Name + " " + "scored" + " " + Grade;
    if (Number(Grade) < min && Grade !== 0) {
      min = Number(Grade);
    }
    if (Grade === null || Grade === 0) {
      alert("Stoping");
    } else if (
      Number(Grade) > 100 ||
      Number(Grade) < 0 ||
      isNaN(Number(Grade))
    ) {
      alert("enter a valid grade - a number between 0 to 100");
      grades.pop();
      location.reload();
    } else {
      grades.push(mark);
    }
    StudentName = prompt("Student's name");
  }
  alert(
    "The grades are: " +
      " " +
      grades +
      " " +
      "and the minimal grade is " +
      " " +
      min
  );
  location.reload();
} else if (Operation === "MAX" || Operation === "max") {
  const grades = [];
  let max = 0;
  let StudentName = prompt("Student's name");
  while (StudentName !== "null" && isNaN(Number(StudentName))) {
    const Name = StudentName;
    const Grade = Number(prompt("enter a grade between 0-100"));
    const mark = Name + " " + "scored" + " " + Grade;
    if (Number(Grade) >= max && Grade !== 0) {
      max = Number(Grade);
    }
    if (Grade === null || Grade === 0) {
      alert("Stoping");
    } else if (
      Number(Grade) > 100 ||
      Number(Grade) < 0 ||
      isNaN(Number(Grade))
    ) {
      alert("enter a valid grade - a number between 0 to 100");
      location.reload();
    }
    grades.push(mark);
    StudentName = prompt("Student's name");
  }
  alert(
    "The grades are: " +
      " " +
      grades +
      " " +
      "and the maximal grade is " +
      " " +
      max
  );
  location.reload();
} else {
  alert(
    "ERROR! INVALID INPUT\n" +
      "Choose either MIN or MAX, make sure to write in ENG"
  );
  location.reload();
}
