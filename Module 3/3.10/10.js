document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener for the form submission
    document.querySelector('#source').addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the values of the first and last name inputs
        var firstName = document.querySelector('input[name="firstname"]').value;
        var lastName = document.querySelector('input[name="lastname"]').value;

        // Display the names in the target paragraph
        var targetParagraph = document.querySelector('#target');
        targetParagraph.textContent = 'Your name is ' + firstName + ' ' + lastName;
    });
});
