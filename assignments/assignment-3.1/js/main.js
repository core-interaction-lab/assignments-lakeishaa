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
            // const genreEl = document.createElement('div');
            // const release_dateEl = document.createElement('div');
            // const imdb_urlEl = document.createElement('a');
            // const descriptionEl = document.createElement('div');
            // pictureImg.src = cloth.fields.picture[0].url;
            posterImg.setAttribute('src', movie.fields.poster[0].url);
            container.append(posterImg);
        }

        if (movie.fields.name) {
            const nameEl = document.createElement('p');
            nameEl.innerHTML = movie.fields.name;
            // how to add class
            nameEl.classList.add('title');
            container.append(nameEl);
        }

        if (movie.fields.imdb_url) {
            const imdb_urlEl = document.createElement('a');
            imdb_urlEl.innerHTML = 'Link';
            imdb_urlEl.setAttribute('href', movie.fields.imdb_url);
            imdb_urlEl.classList.add('imdb');
            container.append(imdb_urlEl);
        }

        if (movie.fields.genre) {
            const genreEl = document.createElement('p');
            genreEl.innerHTML = movie.fields.genre;
            // how to add class
            genreEl.classList.add('genre');
            container.append(genreEl);
        }

        if (movie.fields.release_date) {
            const release_dateEl = document.createElement('p');
            release_dateEl.innerHTML = movie.fields.release_date;
            release_dateEl.classList.add('date');
            container.append(release_dateEl);
        }

        if (movie.fields.description) {
            const descriptionEl = document.createElement('p');
            descriptionEl.innerHTML = movie.fields.description;
            descriptionEl.classList.add('description');
            container.append(descriptionEl);
        }

        // if (movie.fields.imdb_url) {
        //     const imdb_urlEl = document.createElement('p');
        //     imdb_urlEl.innerHTML = movie.fields.imdb_url;
        //     imdb_urlEl.classList.add('description');
        //     container.append(imdb_urlEl);
        // }

    

        // document.getElementById("name").addEventListener("mouseover", mouseOver);
        // document.getElementById("name").addEventListener("mouseout", mouseOut);

        // function mouseOver() {
        //     document.getElementById("name").style.color = "red";
        //   }
          
        //   function mouseOut() {
        //     document.getElementById("name").style.color = "black";
        //   }

        // const linkTags = document.querySelectorAll('.name');
        // console.log(linkTags);
        // linkTags.forEach((link, index) => {
        // const linkColor =link.style.color;
        // link.id = `my-link-${index + 1}`;
        // link.addEventListener("mouseover", (evt) => {
        //     link.style.color = "cornflowerblue";
        // });

        // link.addEventListener('mouseout', evt => {
        //     link.style.color = linkColor;
        // });

    });
};

fetchMovies();