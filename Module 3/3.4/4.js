'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

// Get the element with id="target"
    var selectElement = document.getElementById('target');

     // Create <option> elements and add them to the <select> element
    for (var i = 0; i < students.length; i++) {
      var optionElement = document.createElement('option');
      optionElement.value = students[i].id;
      optionElement.textContent = students[i].name;
      selectElement.appendChild(optionElement);
    }