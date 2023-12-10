let numbers = [];
for (var i = 0; i < 5; i++) {
    var inputNumber = prompt("Enter number " + (i + 1) + ":");
    numbers.push(parseFloat(inputNumber));
}

console.log("Numbers in reverse order:");
for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}