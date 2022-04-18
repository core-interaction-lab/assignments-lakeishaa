const db = {
    id: 'appdimU0rQM4pceUj',
    table: 'movies',
    apiKey: 'keyeABd47N9SUfc1p'
};

const airtableUrl = `https://api.airtable.com/v0/appdimU0rQM4pceUj/movies?api_key=keyeABd47N9SUfc1p`

const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let moviesArray = [];

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    // console.log(response);
    buildSlideshow(response.records);
    return response.records; 
};

const buildSlideshow = (movies) => {
    const slideCount = 7;

    const articleEls = movies.slice(0, slideCount).map(buildSlide);
    console.log(articleEls);
    
    slideshowContainer.append(...articleEls);
  
    let leftIndex = 0;
    let rightIndex = slideCount - 1;


    prevButton.addEventListener('click', () => {
        leftIndex += 1;
        rightIndex += 1;

        if (rightIndex >= movies.length) {
            rightIndex = 0;
        }

        if (leftIndex) >= movies.length) {
            leftIndex = 0;
        }

        console.log(leftIndex, rightIndex);
 
        slideshowContainer.removeChild(slideshowContainer.children[0]);
        slideshowContainer.append(buildSlide(movies[rightIndex, rightIndex]));
    });

    nextButton.addEventListener('click', () => {
        leftIndex -= 1;
        rightIndex -= 1;

        if (leftIndex < 0) {
            leftIndex = movies.length -1;
        }

        if (rightIndex < 0) {
            rightIndex = movies.length -1;
        }

        console.log(leftIndex, rightIndex);

        const lastItem = slideshowContainer.querySelectorAll('article')[slideCount - 1];
        slideshowContainer.removeChild(lastItem);
        slideshowContainer.prepend(buildSlide(movies[leftIndex, rightIndex]));
    });
};

const buildSlide = (movie) => {
    const movieContainer = document.createElement('article');
    if (movie.fields.poster) {
            // console.log(movie.fields.poster[0].url);
            const posterSelectBtn = document.createElement('button');
            posterSelectBtn.dataset.movieIndex = index;

            posterSelectBtn.addEventListener('click', evt => {
                buildSelected(movie[index]);
            });

            const posterImg = document.createElement('img');
            posterImg.src = movie.fields.poster[0].url;
            posterImg.classList.add('image');
            posterImg.id ='jangan';

            posterSelectBtn.append(posterImg);
            movieContainer.append(posterSelectBtn);
        }

        return 

    if (movie.fields.release_date) {
        console.log(movie.fields.release_date);
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

const selectedMovieContainer = document.getElementById (selected-movie'')

const buildSelectedMovie = movie => {
    
    if (movie.fields.description) {
        const descriptionEl = document.createElement('p');
        descriptionEl.innerHTML = movie.fields.description;
        descriptionEl.classList.add('movie-description');
        movieContainer.append(descriptionEl);
        selectedMovieContainer.append(descriptionEl);
    }

    if (movie.fields.poster) {
        const posterImg = document.createElement('img');
        posterImg.src = movie.fields.poster[0].url;
        posterImg.classList.add('image');
        posterImg.id ='jangan';
        selectedMovieContainer.append(posterImg);
    }

    if (movie.fields.release_date) {
        console.log(movie.fields.release_date;
        releast.innerHTML = movie.fields.release_dateEl;
        selectedMovieContainer.append(posterImg);
    }
}

fetchMovies();