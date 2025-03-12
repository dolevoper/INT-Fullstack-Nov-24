const { parseArgs } = require("node:util");
const fs = require("fs");

const [, , ...args] = process.argv;


const options = {

    add: {
        type: "string",
        short: "a",
        default: "",
    },
    sub: {
        type: "string",
        short: "s",
        default: "",
    },
    mul: {
        type: "string",
        short: "m",
        default: ""
    },
    div: {
        type: "string",
        short: "d",
        default: ""
    },
    output: {
        type: "string",
        short: "o",
        default: "",
    }
}


const { values, positionals, tokens } = parseArgs({ args, options, tokens: true });

const invalidDivision = tokens.find(token => (token.name === "div" && token.value === "0"));
if (invalidDivision) {

    console.log('Error, cannot divide by zero!');
    process.exit(1);

}


const numbers = getNumbers();


function getOperations() {
    return tokens.map((token) => {
        if (token.name !== "output") {
            return token.name;
        }
    })
}

function getNumbers() {
    const numbers = [0];

    tokens.forEach(token => {

        const newNumber = Number(token.value);

        if (!Number.isNaN(newNumber)) {

            numbers.push(Number(token.value));
        }
    })
    return numbers;
}


function getPrioritizedSections() {

    const operations = getOperations();
    const sections = [];
    let sectionBeginning;
    let sectionEnding;
    let operationsRegistered = 0;


    for (let i = 0; i < operations.length; i++) {
        if ((operations[i] === "mul" || operations[i] === "div") && operationsRegistered === 0) {
            sectionBeginning = i;
            operationsRegistered++;
        }

        if ((operations[i] === "add" || operations[i] === "sub") && operationsRegistered > 0) {
            sectionEnding = i;
            sections.push([sectionBeginning, sectionEnding]);
            operationsRegistered = 0;
        }

        if (i === operations.length - 1 && operationsRegistered > 0) {
            sectionEnding = i + 1;
            sections.push([sectionBeginning, sectionEnding]);
            operationsRegistered = 0;
        }


    }

    return sections;
}


function calculateSection(section) {
    const operations = getOperations();
    let result = numbers[section[0]];


    for (let i = section[0]; i <= section[1]; i++) {

        switch (operations[i]) {
            case "mul":
                result *= numbers[i + 1];
                break;
            case "div":
                result /= numbers[i + 1];
                break;
        }
    }

    return result;
}

function rearrangeOperationsAndNumbers() {

    const rearrangedOPerations = getOperations();;

    const rearangedNumbers = getNumbers();

    const prioritizedSections = getPrioritizedSections();


    for (let i = prioritizedSections.length - 1; i >= 0; i--) {

        rearangedNumbers[prioritizedSections[i][0]] = calculateSection(prioritizedSections[i]);

        rearangedNumbers.splice(prioritizedSections[i][0] + 1, prioritizedSections[i][1] - prioritizedSections[i][0]);

        rearrangedOPerations.splice(prioritizedSections[i][0], prioritizedSections[i][1] - prioritizedSections[i][0]);
    }

    return [rearangedNumbers, rearrangedOPerations];
}

function calculatePreArrangedProblem(numbers, operations) {

    let result = numbers[0];

    for (let i = 0; i < operations.length; i++) {

        switch (operations[i]) {
            case "add":
                result += numbers[i + 1];
                break;
            case "sub":
                result -= numbers[i + 1];
                break;
        }


    }
    return result;
}

function app() {

    let result = 0;

    const operations = getOperations();

    const numbers = getNumbers();

    const prioritizedSections = getPrioritizedSections();

    if (prioritizedSections.length === 0) {

        result = calculatePreArrangedProblem(numbers, operations);

    }

    else {
        const [rearrangedNumbers, rearrangedOPerations] = rearrangeOperationsAndNumbers();


        result = calculatePreArrangedProblem(rearrangedNumbers, rearrangedOPerations)

    }


    manageResult(result);

}



function manageResult(result) {

    const content = result.toString();

    const inputPath = values.output;
  
    if (!inputPath) {

        console.log(content);
    }

    else {
        fs.writeFileSync(inputPath, content);

    }


}

app();