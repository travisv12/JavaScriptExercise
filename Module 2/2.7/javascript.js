 function rollDice(numSides) {
        return Math.floor(Math.random() * numSides) + 1;
    }
    let maxNumber = parseInt(prompt("Enter the number of dice sides you want:"));
    if (isNaN(maxNumber) || maxNumber <= 0) {
        document.write("<h2>Please enter a valid positive number.</h2>");
    } else {
        document.write("<h2>Dice Rolls:</h2>");
        document.write("<ul>");
        let result;
        do {
            result = rollDice(maxNumber);
            document.write("<li>" + result + "</li>");
        } while (result !== maxNumber);
        document.write("</ul>");
    }