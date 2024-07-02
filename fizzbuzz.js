// This is our main function
function fizzbuzz() {
    const limit = parseInt(process.argv[2]);
    for (let i = 1; i <= limit; i++) {
        let text = [];
        if(i%11 == 0){
            if(i%13 == 0){
                text.push("Fezz");
            }
            text.push("Bong");
        } else {
            if(i%3 == 0){
                text.push("Fizz");
            }
            if(i%13 == 0){
                text.push("Fezz");
            }
            if(i%5 == 0){
                text.push("Buzz");
            }
            if(i%7 == 0) {
                text.push("Bang");
            }
        }
        
        if(text.length==0){
            console.log(i);
        }else {
            if(i%17){
                console.log(text.reverse().join(""));
            } else {
                console.log(text.join(""));
            }
        }
        
    }

    // Put your code here...

}

// Now, we run the main function:
fizzbuzz();

