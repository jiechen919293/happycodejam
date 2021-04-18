// This function creates an interface with (stdOut)
// it allows your code to read lines of input
// from the terminal
function readInput() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })

    rl.on('line', function(line) {

            console.log(line);


        })
        .on('close', () => {

            process.exit();
        })
}
// You have to actually tell your JS to start reading the input
// This is how you do it. 
readInput();