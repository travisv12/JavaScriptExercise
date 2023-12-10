 // Get the elements
    var triggerElement = document.getElementById('trigger');
    var targetImage = document.getElementById('target');

    // Set the image sources for hover and non-hover states
    var originalImageSrc = 'img/picA.jpg';
    var hoverImageSrc = 'img/picB.jpg';

    // Add event listeners for mouseover and mouseout
    triggerElement.addEventListener('mouseover', function() {
      // Change the image source on mouseover
      targetImage.src = hoverImageSrc;
    });

    triggerElement.addEventListener('mouseout', function() {
      // Change the image source back on mouseout
      targetImage.src = originalImageSrc;
    });