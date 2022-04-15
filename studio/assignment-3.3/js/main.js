const db = {
    id: 'appqlAk4rdVEwSycH',
    table: 'Spotify Explored songs',
    apiKey: 'keyul7nEZff6Uw7lV'
};

const airtableUrl = `https://api.airtable.com/v0/appqlAk4rdVEwSycH/songs?api_key=keyul7nEZff6Uw7lV`

const fetchSongs = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);

    const container = document.getElementById ('songs-container');

    response.records.forEach((song) => {
        console.log(song);

        // if (movie.fields.name) {
        //     const nameEl = document.createElement('p');
        //     nameEl.innerHTML = movie.fields.name;
        //     // how to add class
        //     nameEl.classList.add('name');
        //     container.append(nameEl);
        // }

        // if (movie.fields.artist) {
        //     const artistEl = document.createElement('p');
        //     artistEl.innerHTML = movie.fields.artist;
        //     // how to add class
        //     artistEl.classList.add('title');
        //     container.append(artistEl);
        // }

        // if (movie.fields.duration) {
        //     const durationEl = document.createElement('p');
        //     durationEl.innerHTML = movie.fields.duration;
        //     // how to add class
        //     durationEl.classList.add('title');
        //     container.append(durationEl);
        // }

        console.log(song.fields);
        const articleEl = document.createElement('article');
        const nameEl = document.createElement('div');
        const artistEl = document.createElement('div');
        const durationEl = document.createElement('div');
        const spotifyEl = document.createElement('a');

        nameEl.innerHTML = movie.fields.name;
        artistEl.innerHTML = movie.fields.artist;
        durationEl.innerHTML = movie.fields.duration;
        spotifyEl.innerHTML = movie.fields.spotify;

        articleEl.appendChild(nameEl);
        articleEl.appendChild(artistEl);
        articleEl.appendChild(durationEl);
        articleEl.appendChild(spotifyEl);

        songsContainer.appendChild(articleEl);

    })
};

fetchSongs();
