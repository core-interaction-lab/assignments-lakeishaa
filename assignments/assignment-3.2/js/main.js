const db = {
    id: 'appdimU0rQM4pceUj',
    table: 'movies',
    apiKey: 'keyeABd47N9SUfc1p'
};

const airtableUrl = `https://api.airtable.com/v0/appdimU0rQM4pceUj/movies?api_key=keyeABd47N9SUfc1p`

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);

// const myObject = {
//     name: 'clothes',
//     shop_name: 'brand',
// }

// const myArray = ['movie', brand, 'lalala'];

// console.log( myObject.shop_name )
// console.log(myArray[2]);

    const container = document.getElementById ('movies-container');

    response.records.forEach((movie) => {
        console.log(movie. fields);
        const articleEl = document.createElement('article');
        const genreEl = document.createElement('div');
        const release_dateEl = document.createElement('div');
        const imdb_urlEl = document.createElement('a');
        const descriptionEl = document.createElement('div');
        const posterImg = document.createElement('img');
        console.log(movie.fields.poster[0].url)
        posterImg.setAttribute('src', movie.fields.poster[0].url);

        container.append(posterImg);

        nameEl.innerHTML = movie.fields.name;
        nameEl.classList.add("title");

        genreEl.innerHTML = movie.fields.genre;
        genreEl.classList.add("genre");

        imdb_urlEl.href = movie.fields.imdb_url;
        imdb_urlEl.target = "_blank";
        imdb_urlEl.classList.add("imdb-link");
        imdb_urlEl.innerHTML = "IMDB Page";

        release_dateEl.innerHTML = movie.fields.release_date;
        release_dateEl.classList.add("date");

        descriptionEl.innerHTML = movie.fields.description;
        descriptionEl.classList.add("description");

        posterEl.innerHTML = movie.fields.poster;
        posterEl.classList.add("poster");





       
        articleEl.append(nameEl,genreEl,imdb_urlEl,release_dateEl,descriptionEl,posterEl);

        /* titleEL.innerHTML = "tiitle";*/
        moviesContainer.appendChild(articleEL);
    })

};

fetchMovies();