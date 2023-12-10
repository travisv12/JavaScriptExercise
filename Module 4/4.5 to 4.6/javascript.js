    document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get the value from the input field
      const inputValue = document.getElementById('query').value;

      // Make a request to the Chuck Norris API with the search term
      fetch(`https://api.chucknorris.io/jokes/search?query=${inputValue}`)
        .then(response => response.json())
        .then(data => {
          // Display each joke in the specified format
          const jokesContainer = document.getElementById('jokes');
          jokesContainer.innerHTML = '';

          if (data.result.length > 0) {
            data.result.forEach(joke => {
              const article = document.createElement('article');
              const p = document.createElement('p');
              p.textContent = joke.value;
              article.appendChild(p);
              jokesContainer.appendChild(article);
            });
          } else {
            jokesContainer.innerHTML = '<p>No jokes found.</p>';
          }
        })
        .catch(error => {
          console.error('Error fetching Chuck Norris jokes:', error);
          const jokesContainer = document.getElementById('jokes');
          jokesContainer.innerHTML = '<p>Error fetching jokes. Please try again.</p>';
        });
    });