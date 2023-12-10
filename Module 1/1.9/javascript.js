 let number = prompt("Enter an integer:");

    number = parseInt(number);

    if (isNaN(number) || number <= 1) {
        document.write("<h2>Please enter a valid integer greater than 1.</h2>");
    } else {
        let counter = 0;
        for (let i = 2; i <= number; i++) {
            if (number % i === 0) {
                counter  = counter +1;
            } else{
                counter = counter;
            }
        }
        if (counter == 1){
            document.write("<h2>The number " + number + " is a prime number.</h2>");
        } else {
            document.write("<h2>The number "+ number + " is not a prime number</h2>");
        }
    }
