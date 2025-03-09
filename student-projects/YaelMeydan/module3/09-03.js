#!/usr/bin/env node

// Import required modules
const yargs = require("yargs");

// Configure command-line options
const argv = yargs
  .usage("Usage: $0 <command> [options]")
  .command("add", "Addition of two numbers", {
    num1: {
      describe: "First number",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Second number",
      demandOption: true,
      type: "number",
    },
  })
  .command("sub", "Subtraction of two numbers", {
    num1: {
      describe: "First number",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Second number",
      demandOption: true,
      type: "number",
    },
  })
  .command("mul", "Multiplication of two numbers", {
    num1: {
      describe: "First number",
      demandOption: true,
      type: "number",
    },
num2: {
    describe: "Second number",
    demandOption: true,
    type: "number",
  },
})
.command("div", "Division of two numbers", {
  num1: {
    describe: "First number",
    demandOption: true,
    type: "number",
  },
  num2: {
    describe: "Second number",
    demandOption: true,
    type: "number",
  },
})
.help().argv;

// Command execution
const command = argv._[0];

switch (command) {
case "add":
  console.log(`Result: ${argv.num1 + argv.num2}`);
  break;
case "sub":
  console.log(`Result: ${argv.num1 - argv.num2}`);
  break;
case "mul":
  console.log(`Result: ${argv.num1 * argv.num2}`);
  break;
case "div":
  if (argv.num2 === 0) {
    console.log("Error: Division by zero is not allowed!");
  }else {
    console.log(`Result: ${argv.num1 / argv.num2}`);
  }
  break;
default:
  console.log("Unknown command! Use --help for usage instructions.");
  break;
}