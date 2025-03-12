import chalk from "chalk";

console.log(chalk.blue`hello`, chalk.yellowBright`world`, add(10, 10));

function add(a: number, b: number) {
    return a + b;
}
