let year = prompt("Enter a year:");

    year = parseInt(year);

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.write("<h2>" + year + " is a leap year!</h2>");
    } else {
        document.write("<h2>" + year + " is not a leap year.</h2>");
    }