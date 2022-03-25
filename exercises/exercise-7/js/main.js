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

        imdbEl.href = movie.fields.imdb_url;
        imdbEl.target = "_blank"
        imdbEl.classList.add('imdb-link');

        imdbEl.innerHTML = "IMDB Page";
        releaseDateEl.innerHTML = movie.fields.release_date;

        articleEl.append(titleEl, genreEl, imdbEl, releaseDateEl) //if u wanna change the order do it in this line //

        // articleEl.appendChild(titleEl);
        // articleEl.appendChild(genreEl);
        // articleEl.appendChild(imdbEl);
        // articleEl.appendChild(releaseDateEl);

        moviesContainer.appendChild(articleEl);
    })

    const linkTags = document.querySelectorAll('.imdb-link');
    console.log(linkTags);
    linkTags.forEach((link, index) => {
        const linkColor =link.style.color;
        link.id = `my-link-${index + 1}`;
        link.addEventListener("mouseover", (evt) => {
            link.style.color = "cornflowerblue";
        });

        link.addEventListener('mouseout', evt => {
            link.style.color = linkColor;
        });
    });


};

fetchMovies();
