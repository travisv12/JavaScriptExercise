let uniqueNumbers = [];
    while (true) {
        let inputNumber = prompt("Enter a number (enter same number second time to stop):");
        inputNumber = parseFloat(inputNumber);
        if (isNaN(inputNumber)) {
            console.error("Invalid input. Please enter a valid number.");
            continue;
        }
        if (uniqueNumbers.includes(inputNumber)) {
            console.log("The number " + inputNumber + " has already been given. Stopping operation.");
            break;
        }
        uniqueNumbers.push(inputNumber);
    }

    let sortedNumbers = uniqueNumbers.sort(function(a, b) {
        return a - b;
    });
    console.log("All given numbers in ascending order:");
    for (let i = 0; i < sortedNumbers.length; i++) {
        console.log(sortedNumbers[i]);
    }