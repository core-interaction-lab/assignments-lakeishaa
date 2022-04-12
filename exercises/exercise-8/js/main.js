const db = {
    id: 'appdimU0rQM4pceUj',
    table: 'movies',
    apiKey: 'keyeABd47N9SUfc1p'
};

const airtableUrl = `https://api.airtable.com/v0/appdimU0rQM4pceUj/movies?api_key=keyeABd47N9SUfc1p`

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    // console.log(response);
    buildSlideshow(response.records);
    return response.records; 
};

const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


const buildSlideshow = (movies) => {
    console.log(movies); 
    console.log(buildSlide(movies[0]));
    
    const firstMovie = buildSlide(movies[0]);
    slideshowContainer.append(firstMovie);

    // variable to hold index + two event lsitenets. if u click next button it will run event listenr huh im confused
    let currentMovie = 0; 
    // using let bc were gn be changing this ^^ constance weve been using we cant change them after u use them

    prevButton.addEventListener('click', () => {
        // make sure its not out of bounds so u cant go below 0 which is one
        if (currentMovie === 0) {
            currentMovie = movies.length -1; 
            // ^^ returns how many items r in ur array. also -1 instead of 0 bc its -1 to 9 so its 10 in ur array.
        } else {
            currentMovie = currentMovie -1 ; 
        }
            // ^if its not 0 do this instead
        // in if statement u cld use 3 or 2 equals sign check if ur current movie has zero value. 3 is more strict than 2.
        
        const movieRecord = movies[currentMovie];
        swapSlide(movieRecord);
    });

        // when we hit the last movie we watnt it to jump to the firts  :
        nextButton.addEventListener('click', () => {
            if (currentMovie === movies.length - 1) {
               currentMovie = 0;
            } else {
                currentMovie = currentMovie + 1 ; 
            }
    
            const movieRecord = movies[currentMovie];
            swapSlide(movieRecord);
        });
    
};

const swapSlide = (movieRecord) => {
    const slideEl = buildSlide(movieRecord);
    
        slideshowContainer.innerHTML = ' ';
        slideshowContainer.append(slideEl);

}

const buildSlide = (movie) => {
    const movieContainer = document.createElement('article');
    if (movie.fields.poster) {
            console.log(movie.fields.poster[0].url);
            const posterImg = document.createElement('img');
            posterImg.src = movie.fields.poster[0].url;
            posterImg.classList.add('image');
            posterImg.id ='jangan';
            movieContainer.append(posterImg);
        }

    if (movie.fields.release_date) {
        console.log(movie.fields.release_date);
    }

    if (movie.fields.description) {
        const descriptionEl = document.createElement('p');
        descriptionEl.innerHTML = movie.fields.description;
        descriptionEl.classList.add('movie-description');
        movieContainer.append(descriptionEl);
    }
    
    return movieContainer;

    // if (movie.fields.poster) {
    //     console.log(movie.fields.poster[0].url);
    //     const posterImg = document.createElement('img');
    //     posterImg.setAttribute('src', movie.fields.poster[0].url);
    //     container.append(posterImg);
    // }

    // if (movie.fields.name) {
    //     const nameEl = document.createElement('p');
    //     nameEl.innerHTML = movie.fields.name;
    //     nameEl.classList.add('title');
    //     container.append(nameEl);
    // }

    // if (movie.fields.imdb_url) {
    //     const imdb_urlEl = document.createElement('a');
    //     imdb_urlEl.innerHTML = 'Link';
    //     imdb_urlEl.setAttribute('href', movie.fields.imdb_url);
    //     imdb_urlEl.classList.add('imdb');
    //     container.append(imdb_urlEl);
    // }

    // if (movie.fields.genre) {
    //     const genreEl = document.createElement('p');
    //     genreEl.innerHTML = movie.fields.genre;
    //     genreEl.classList.add('genre');
    //     container.append(genreEl);
    // }

    // if (movie.fields.release_date) {
    //     const release_dateEl = document.createElement('p');
    //     release_dateEl.innerHTML = movie.fields.release_date;
    //     release_dateEl.classList.add('date');
    //     container.append(release_dateEl);
    // }

    // if (movie.fields.description) {
    //     const descriptionEl = document.createElement('p');
    //     descriptionEl.innerHTML = movie.fields.description;
    //     descriptionEl.classList.add('description');
    //     container.append(descriptionEl);
    // }
};

fetchMovies();