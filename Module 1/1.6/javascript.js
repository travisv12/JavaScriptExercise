let shouldCalculate = confirm("Should I calculate the square root?");

    if (shouldCalculate) {
        let number = prompt("Enter a number:");
        number = parseFloat(number);
        if (number < 0) {
            document.write("<h2>The square root of a negative number is not defined.</h2>");
        } else {
            let squareRoot = Math.sqrt(number);
            document.write("<h2>The square root of " + number + " is " + squareRoot + ".</h2>");
        }
    } else {
        document.write("<h2>The square root is not calculated.</h2>");
    }