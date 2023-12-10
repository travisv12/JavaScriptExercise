document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get the value from the input field
      const inputValue = document.getElementById('query').value;

      // Make a request to the TVMaze API
      fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then(response => response.json())
        .then(data => {
          // Clear previous results
          const resultsContainer = document.getElementById('results');
          resultsContainer.innerHTML = '';

          if (data.length > 0) {
            data.forEach(tvShow => {
              const article = document.createElement('article');

              // Show name in <h2> element
              const h2 = document.createElement('h2');
              h2.textContent = tvShow.show.name;
              article.appendChild(h2);

              // Show link to details in <a> element
              const a = document.createElement('a');
              a.href = tvShow.show.url;
              a.textContent = 'Details';
              a.target = '_blank';
              article.appendChild(a);

              // Show medium image with <img src="" alt="">
const img = document.createElement('img');
img.src = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
img.alt = tvShow.show.name;
article.appendChild(img);

              // Show summary in <div> element
              const div = document.createElement('div');
              div.innerHTML = tvShow.show.summary || 'No summary available.';
              article.appendChild(div);

              // Append the <article> element to the results container
              resultsContainer.appendChild(article);
            });
          } else {
            resultsContainer.innerHTML = '<p>No results found.</p>';
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          const resultsContainer = document.getElementById('results');
          resultsContainer.innerHTML = '<p>Error fetching data. Please try again.</p>';
        });
    });