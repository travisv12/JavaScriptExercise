function calculateProbability(numDice, targetSum, numSimulations) {
        let favorableOutcomes = 0;

        for (let i = 0; i < numSimulations; i++) {
            let sum = 0;
            for (let j = 0; j < numDice; j++) {
                sum += Math.floor(Math.random() * 6) + 1;
            }
            if (sum === targetSum) {
                favorableOutcomes++;
            }
        }
        let probability = (favorableOutcomes / numSimulations) * 100;
        return probability.toFixed(2);
    }

    let numDice = parseInt(prompt("Enter the number of dice:"));
    let targetSum = parseInt(prompt("Enter the sum of eyes of interest:"));
    let numSimulations = 10000;

    if (isNaN(numDice) || isNaN(targetSum) || numDice < 1 || targetSum < numDice || targetSum > numDice * 6) {
        document.write("<h2>Please enter valid values.</h2>");
    } else {
        let probability = calculateProbability(numDice, targetSum, numSimulations);
        document.write("<h2>Probability to get sum " + targetSum + " with " + numDice + " dice is " + probability + "%</h2>");
    }




