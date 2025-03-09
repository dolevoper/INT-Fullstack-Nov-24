Command line calculator.
Will support the following flags:
--add    (-a) - Add a number to the result
--sub    (-s) - Subtract a number from the result
--mul    (-m) - Multiply the sum by a number
--div    (-d) - Divide the sum by a number
--output (-o) - Save the result to a file

Examples:
`node calc.js`
Output: 0

`node calc.js --add 5 --add 10 --sub 3`
Output: 12

`node calc.js -s 20 -d 2 -o res.txt`
There will be not output to the terminal.
A file named `res.txt` will be created, with the content -10.

`node calc.js -a 10 -d 0`
Output: Error: cannot divide by 0.
(Exit code 1)

Bonus:
Follow mathematical order of operations instead of the order of inputs to the run command.
