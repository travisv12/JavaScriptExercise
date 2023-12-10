'use strict';
const names = ['John', 'Paul', 'Jones'];
 // Get the element with id="target"
    var targetElement = document.getElementById('target');

    // Initialize an empty string to store the HTML code
    var htmlCode = '';

    // Loop through the names array and create <li> elements
    for (var i = 0; i < names.length; i++) {
      htmlCode += '<li>' + names[i] + '</li>';
    }

    // Add HTML content using innerHTML
    targetElement.innerHTML = htmlCode;
