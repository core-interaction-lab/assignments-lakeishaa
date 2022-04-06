const db = {
    id: 'appLajcs7Dq53HM0o',
    table: 'clothes',
    apiKey: 'keyeABd47N9SUfc1p'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchClothes = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);

// const myObject = {
//     name: 'clothes',
//     shop_name: 'brand',
// }

// const myArray = ['movie', brand, 'lalala'];

// console.log( myObject.shop_name )
// console.log(myArray[2]);

    const container = document.getElementById ('clothes-container');

    response.records.forEach((cloth) => {
        console.log(cloth);
        if (cloth.fields.picture) {
            console.log(cloth.fields.picture[0].url);
            const pictureImg = document.createElement('img');
            // pictureImg.src = cloth.fields.picture[0].url;
            pictureImg.setAttribute('src', cloth.fields.picture[0].url);
            container.append(pictureImg);
        }
        if (cloth.fields.based_in) {
            console.log(cloth.fields.based_in[0].url);
        }
        if (cloth.fields.link) {
            console.log(cloth.fields.link[0].url);
        }
        if (cloth.fields.color) {
            console.log(cloth.fields.color[0].url);
        }
        if (cloth.fields.category) {
            console.log(cloth.fields.category[0].url);
        }

        if (cloth.fields.shop_name) {
            const shop_nameEl = document.createElement('p');
            shop_nameEl.innerHTML = cloth.fields.shop_name;
            // how to add class
            shop_nameEl.classList.add('shop_name_text');
            container.append(shop_nameEl);
        }
    });
};

fetchClothes();