let numberOfRolls = prompt("Enter the number of dice rolls:");

    numberOfRolls = parseInt(numberOfRolls);

    if (isNaN(numberOfRolls) || numberOfRolls <= 0) {
        document.write("Please enter a valid positive number for the dice rolls.");
    } else {
        let sum = 0;

        for (let i = 0; i < numberOfRolls; i++) {
            let diceResult = Math.floor(Math.random() * 6) + 1;
            document.write("<p>Roll #" + (i + 1) + ": " + diceResult +"</p>");
            sum += diceResult;
        }

        document.write("Sum of dice rolls: " + sum);
    }