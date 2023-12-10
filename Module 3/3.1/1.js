    // Get the element with id="mySection"
    var sectionElement = document.getElementById('target');

    // Text to be added
    var textToAdd = '<li>First item</li>\n' +
        '<li>Second item</li>\n' +
        '<li>Third item</li>';

    // Add text using innerHTML
    sectionElement.innerHTML = textToAdd;