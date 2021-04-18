function readInput() {​
    const readline = require('readline')
    const rl = readline.createInterface({​
        input: process.stdin,
        output: process.stdout,
        terminal: false,
    }​)
    const problem = {​
        t: 0,
        x: [],
        y: [],
        mural: [],
    }​;
    rl.on('line', function(line) {​
            if (problem.t === 0) {​
                problem.t = +line;
            }​
            else {​
                const inputArray = line.split(' ');
                problem.x.push(+inputArray[0]);
                problem.y.push(+inputArray[1]);
                problem.mural.push(inputArray[2]);
            }​
            if (problem.x.length === problem.t) {​
                rl.close();
            }​
        }​)
        .on('close', () => {​
            solveProblem(problem);
            process.exit();
        }​)
}​;
const sendOutput = function(text) {​
    const readline = require('readline')
    const rl = readline.createInterface({​
        input: process.stdin,
        output: process.stdout,
        terminal: false,
    }​)
    console.log(text);
}​;
const formatOutput = function(i, result) {​
    return `Case #${​i + 1}​: ${​result}​`;
}​;
const solveProblem = function(problem) {​
    for (let i = 0; i < problem.t; i++) {​
        sendOutput(formatOutput(i, getBestCost(problem.x[i], problem.y[i], problem.mural[i])));
    }​
}​;
const getBestCost = function(x, y, mural) {​
    if ((x >= 0) && (y >= 0)) {​
        return minimizeCost(x, y, mural);
    }​
}​;
const minimizeCost = function(x, y, mural) {​
    let cost = 0;
    let mode = '?';
    for (let i = 0; i < mural.length; i++) {​
        switch (mode) {​
            case '?':
                if (mural[i] === '?') continue;
                if (mural[i] === 'C') {​
                    mode = 'C';
                    continue;
                }​
                if (mural[i] === 'J') {​
                    mode = 'J';
                    continue;
                }​
                break;
            case 'C':
                if (mural[i] === 'C') continue;
                if (mural[i] === '?') continue;
                if (mural[i] === 'J') {​
                    cost += x;
                    mode = 'J';
                    continue;
                }​
                break;
            case 'J':
                if (mural[i] === 'J') continue;
                if (mural[i] === '?') continue;
                if (mural[i] === 'C') {​
                    cost += y;
                    mode = 'C';
                    continue;
                }​
                break;
        }​
    }​
    return cost;
}​;
readInput();