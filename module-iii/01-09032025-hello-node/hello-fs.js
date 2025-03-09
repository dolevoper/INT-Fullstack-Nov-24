// import * as fs from "fs";
const fs = require("fs");

const file = fs.readFileSync("./hello.txt", "utf8");

console.log(file);
