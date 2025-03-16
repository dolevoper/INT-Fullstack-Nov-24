// Get file location from args
// Read the file
// Create a new file with the contents of the original file, in a single line, separated by commas
// (use writeFileSync)
// Example:

// hello.txt:
// hello
// world

// hello-joined.txt:
// hello,world

// Continued - optionally get the output file path from the args, using a flag -o
// Examples:
// hello-fs.js foo.txt -> foo-joined.txt
// hello-fs.js foo.txt -o bar.txt -> bar.txt
// hello-fs.js -o bar.txt foo.txt -> bar.txt
// hello-fs.js -o bar.txt -o baz.txt foo.txt -> Error - must provide a single output file

// import * as fs from "fs";
const fs = require("fs");
const { EOL } = require("os");

const [,, inputPath] = process.argv;

app();

function app() {
    const input = getInput();
    const joinedContent = input.replaceAll(EOL, ",");
    const outputPath = getOutputFilePath();

    fs.writeFileSync(outputPath, joinedContent);
}

function getInput() {
    try {
        return fs.readFileSync(inputPath, "utf8");
    } catch {
        console.error(`Cannot find file ${inputPath}`);
        process.exit(1);
    }
}

function getOutputFilePath() {
    const fileParts = inputPath.split(".");
    const fileName = fileParts.slice(0, -1).join(".");
    const fileExtension = fileParts.slice(-1);
    
    return `${fileName}-joined.${fileExtension}`;
}

