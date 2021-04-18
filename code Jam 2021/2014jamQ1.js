const { PRIORITY_BELOW_NORMAL } = require('node:constants');

function readInput() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })
    const jam14q = {
        n: 0,
        strInput: []

    };
    rl.on('line', function(line) {
            if (jam14q.t === 0) {
                jam14q.t = +line;
            } else {
                const inputArray = line;
                console.log(inputArray);
            }
            if (jam14q.strInput.length === jam14q.t) {
                rl.close();
            }

        })
        .on('close', () => {
            printBox(jam14q);
            process.exit();
        })
}
const printBox = function(jam14q) {
    for (let i = 0; i < jam14q.t; i++) {
        sendOutput(jam14q.strInput[i]);
    }
}
const sendOutput = function(string) {
    console.log(printLine(string));
    console.log(`| ${string} |`);
    console.log(printLine(string));
}
const printLine = function(string) {
    if (sring === '') {
        str1 = '+---+';
    } else {
        let str1 = '+';
        for (let i = 0; i < string.length + 2; i++) {
            str1 += '-';
        }
        str1 += '+';
        return str1;
    }


}
readInput();