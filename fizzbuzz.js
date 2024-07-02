// This is our main function
function fizzbuzz() {
    let limit = 0;
    const readline = require('node:readline');
    const { stdin: input, stdout: output } = require('node:process');

    const rl = readline.createInterface({ input, output });
    rl.question('Enter your limit: ', (ans) => {
        limit = parseInt(ans)
        rl.close();
        calcRes(limit);
    });    
}


// a multiple rule checker 
function checkMult(i,n){
    return (impl.includes(n.toString()) || impl.length == 0) && i%n == 0;
}

// this is the function to calculate what to output
function calcRes(limit){
    for (let i = 1; i <= limit; i++) {
        let text = [];
        if(checkMult(i,11)){
            if(checkMult(i,13)){
                text.push("Fezz");
            }
            text.push("Bong");
        } else {
            if(checkMult(i,3)){
                text.push("Fizz");
            }
            if(checkMult(i,13)){
                text.push("Fezz");
            }
            if(checkMult(i,5)){
                text.push("Buzz");
            }
            if(checkMult(i,7)) {
                text.push("Bang");
            }
        }
        
        if(text.length==0){
            console.log(i);
        }else {
            if(checkMult(i,17)){
                console.log(text.reverse().join(""));
            } else {
                console.log(text.join(""));
            }
        }
        
    }
}
let impl = [];
// take the rule if specified
if(process.argv.length > 2){
    impl = process.argv[2].split(",");
}

// Now, we run the main function:
fizzbuzz();

module.exports = fizzbuzz