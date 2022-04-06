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
        console.log(movie);

        if (movie.fields.poster) {
            console.log(movie.fields.poster[0].url);
            const posterImg = document.createElement('img');
            // pictureImg.src = cloth.fields.picture[0].url;
            posterImg.setAttribute('src', movie.fields.poster[0].url);
            container.append(posterImg);
        }
        if (movie.fields.genre) {
            console.log(movie.fields.genre[0].url);
        }
        if (movie.fields.release_date) {
            console.log(movie.fields.release_date[0].url);
        }
        if (movie.fields.imdb_url) {
            console.log(movie.fields.imdb_url[0].url);
        }
        if (movie.fields.poster) {
            console.log(movie.fields.poster[0].url);
        }
        if (movie.fields.description) {
            console.log(movie.fields.description[0].url);
        }

        if (movie.fields.name) {
            const nameEl = document.createElement('p');
            nameEl.innerHTML = movie.fields.name;
            // how to add class
            nameEl.classList.add('name_text');
            container.append(nameEl);
        }
    });
};

fetchMovies();