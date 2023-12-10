 // Get the element with id="myList"
    var listElement = document.getElementById('target');

    // Create a new div element
    var containerDiv = document.createElement('div');

    // Set the innerHTML of the div with the desired HTML content
    containerDiv.innerHTML = '<li>First item</li><li>Second item</li><li>Third item</li>';

     // Add class "my-item" to the second list item
    containerDiv.querySelector('li:nth-child(2)').classList.add('my-item');

    // Append the div element to the list element
    listElement.appendChild(containerDiv);