let startYear = prompt("Enter the start year:");
     let endYear = prompt("Enter the end year:");

    startYear = parseInt(startYear);
    endYear = parseInt(endYear);

    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
        document.write("Please enter valid start and end years.");
    } else {
        document.write("<ul>");

        for (let year = startYear; year <= endYear; year++) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                document.write("<li>" + year + "</li>");
            }
        }

        document.write("</ul>");
    }