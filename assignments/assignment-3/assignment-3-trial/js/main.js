const db = {
    id: 'appdimU0rQM4pceUj',
    table: 'movies',
    apiKey: 'keyeABd47N9SUfc1p'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);
};

fetchMovies();