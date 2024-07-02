// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 200; i++) {
        let text = "";
        if(i%11 == 0){
            if(i%13 == 0){
                text = "FezzBong";
            }else {
                text = "Bong";
            }
        } else {
            if(i%3 == 0){
                text += "Fizz";
            }
            if(i%13 == 0){
                text += "Fezz";
            }
            if(i%5 == 0){
                text += "Buzz";
            }
            if(i%7 == 0) {
                text += "Bang";
            }
        }
        
        if(text == ""){
            console.log(i);
        }else {
            console.log(text);
        }
        
    }

    // Put your code here...

}

// Now, we run the main function:
fizzbuzz();

