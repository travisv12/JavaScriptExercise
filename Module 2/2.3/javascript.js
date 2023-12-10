  let dogNames = [];

    for (let i = 0; i < 6; i++) {
        let dogName = prompt("Enter the name of dog " + (i + 1) + ":");
        dogNames.push(dogName);
    }
    dogNames.sort().reverse();
    document.write("<h2>Dog Names (Reverse Alphabetical Order):</h2>");
    document.write("<ul>");
    for (let i = 0; i < dogNames.length; i++) {
        document.write("<li>" + dogNames[i] + "</li>");
    }
    document.write("</ul>");