const fetchMovies = async () => {
    const response = await fetch('https://api.airtable.com/v0/appdimU0rQM4pceUj/Table%201?api_key=keyeABd47N9SUfc1p').then(data => data.json() );

    console.log(response);

    const moviesContainer = document.getElementById('movies-container');

    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const imdbEl = document.createElement('a');
        const releaseDateEl = document.createElement('div');

        titleEl.innerHTML = movie.fields.Name;
        genreEl.innerHTML = movie.fields.genre;
        releaseDateEl.innerHTML = movie.fields.release_date;
        imdbEl.innerHTML = movie.fields.imdb_url;

        articleEl.appendChild(titleEl);
        articleEl.appendChild(genreEl);
        articleEl.appendChild(releaseDateEl);
        articleEl.appendChild(imdbEl);

        moviesContainer.appendChild(articleEl);
    })
};

fetchMovies();
