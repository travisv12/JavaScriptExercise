function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let randomNumber = getRandomInt(1,5);
let studentName = prompt("Please enter your name:");


let house;
switch (randomNumber) {
    case 1:
        house = "Gryffindor";
        break;
    case 2:
        house = "Slytherin";
        break;
    case 3:
        house = "Hufflepuff";
        break;
    case 4:
        house = "Ravenclaw";
        break;
    }
document.write("<h2>Hello " + studentName + ", you are in " + house + "!</h2>");