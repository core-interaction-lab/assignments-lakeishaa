const db = {
    id: 'appqlAk4rdVEwSycH',
    table: 'songs',
    apiKey: 'keyul7nEZff6Uw7lV'
};

const airtableUrl = `https://airtable.com/appqlAk4rdVEwSycH/api/docs
https://airtable.com/appqlAk4rdVEwSycH/api/docs`

const fetchSongs = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);

    const container = document.getElementById ('songs-container');

    response.records.forEach((movie) => {
        console.log(movie);
    }

};
