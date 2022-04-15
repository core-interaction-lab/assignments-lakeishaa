const db = {
    id: 'appqlAk4rdVEwSycH',
    table: 'Spotify Explored songs',
    apiKey: 'keyul7nEZff6Uw7lV'
};

const airtableUrl = `https://api.airtable.com/v0/appqlAk4rdVEwSycH/songs?api_key=keyul7nEZff6Uw7lV`

const fetchSongs = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());

    buildSlideshow(response.records);
    return response.records; 
};

const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


const buildSlideshow = (songs) => {
    console.log(songs); 
    console.log(buildSlide(songs[0]));
    
    const firstSong = buildSlide(songs[0]);
    slideshowContainer.append(firstSong);

    // variable to hold index + two event lsitenets. if u click next button it will run event listenr huh im confused
    let currentMovie = 0; 
    // using let bc were gn be changing this ^^ constance weve been using we cant change them after u use them

    prevButton.addEventListener('click', () => {
        // make sure its not out of bounds so u cant go below 0 which is one
        if (currentSong === 0) {
            currentSong = songs.length -1; 
            // ^^ returns how many items r in ur array. also -1 instead of 0 bc its -1 to 9 so its 10 in ur array.
        } else {
            currentSong = currentSong -1 ; 
        }
            // ^if its not 0 do this instead
        // in if statement u cld use 3 or 2 equals sign check if ur current movie has zero value. 3 is more strict than 2.
        
        const songRecord = songs[currentSong];
        swapSlide(songRecord);
    });

        // when we hit the last movie we watnt it to jump to the firts  :
        nextButton.addEventListener('click', () => {
            if (currentSong === songs.length - 1) {
               currentSong = 0;
            } else {
                currentSong = currentSong + 1 ; 
            }
    
            const songRecord = songs [currentSong;
            swapSlide(songRecord);
        });
    
};

const swapSlide = (songRecord) => {
    const slideEl = buildSlide(songRecord);
    
        slideshowContainer.innerHTML = ' ';
        slideshowContainer.append(slideEl);

}

const buildSlide = (song) => {
    const songContainer = document.createElement('article');
    if (song.fields.poster) {
            console.log(song.fields.poster[0].url);
            const posterImg = document.createElement('img');
            posterImg.src = song.fields.poster[0].url;
            posterImg.classList.add('image');
            posterImg.id ='jangan';
            songContainer.append(posterImg);
        }

    if (song.fields.release_date) {
        console.log(song.fields.release_date);
    }

    if (song.fields.name) {
        const namenEl = document.createElement('p');
        nameEl.innerHTML = song.fields.name;
        nameEl.classList.add('song-name');
        songContainer.append(nameEl);
    }
    
]    return songContainer;

};

fetchMovies();