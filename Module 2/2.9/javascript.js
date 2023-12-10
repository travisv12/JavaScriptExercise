function even(numbers) {
        let evenArray = [];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                evenArray.push(numbers[i]);
            }
        }
        return evenArray;
    }
    let numbersArray = [2, 7, 4,6,9,1];
    console.log("Original Array:", numbersArray);
    console.log("New Array with Even Numbers:", even(numbersArray));