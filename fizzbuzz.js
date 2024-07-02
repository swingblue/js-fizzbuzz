// This is our main function
function runfizzbuzz() {
    let limit = 0;
    const readline = require('node:readline');
    const { stdin: input, stdout: output } = require('node:process');

    const rl = readline.createInterface({ input, output });
    rl.question('Enter your limit: ', (ans) => {
        limit = parseInt(ans)
        rl.close();
        printResult(limit);
    });    
}

// for the unit testing
function makeOutput(numberToCheck){
    let text = [];
    if(checkMultipleRules(numberToCheck,11)){
        if(checkMultipleRules(numberToCheck,13)){
            text.push("Fezz");
        }
        text.push("Bong");
    } else {
        if(checkMultipleRules(numberToCheck,3)){
            text.push("Fizz");
        }
        if(checkMultipleRules(numberToCheck,13)){
            text.push("Fezz");
        }
        if(checkMultipleRules(numberToCheck,5)){
            text.push("Buzz");
        }
        if(checkMultipleRules(numberToCheck,7)) {
            text.push("Bang");
        }
    }
    
    if(text.length==0){
        return numberToCheck;
    }else {
        if(checkMultipleRules(numberToCheck,17)){
            return text.reverse().join("");
        } else {
            return text.join("");
        }
    }
}

// a multiple rule checker 
function checkMultipleRules(number,factor){
    return (rule.includes(factor.toString()) || rule.length == 0) && number%factor == 0;
}

// this is the function to calculate what to output
function printResult(limit){
    for (let i = 1; i <= limit; i++) {
        console.log(makeOutput(i));
    }
}

let rule = [];
// take the rule if specified
if(process.argv.length > 2){
    rule = process.argv[2].split(",");
}

// Now, we run the main function:
// runfizzbuzz();

module.exports = makeOutput