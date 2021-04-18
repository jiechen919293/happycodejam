process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = [];
let storeary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

process.stdin.on("data", function(input) {
    stdin_input = input.split('');
});

process.stdin.on("end", function() {
    main(stdin_input);
});

function main(input) {
    for (let i = 0; i < input.length; i++) {
        storeary[input[i]]++;
    }
    for (let i = 0; i < 10; i++) {
        process.stdout.write(`${i} ${storeary[i]}\n`);

    }

}