const express = require('express');
const fetch = require('node-fetch');
const config = require('./config')
const app = express();
const port = 8080;

app.use('/', express.static('../client/build'));

app.get('/api/photos', (req, res) => {

    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${config.apiKey}&extras=url_l%2C+url_q%2C+description%2C+media%2C+owner_name&format=json&nojsoncallback=1`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const photos = data.photos.photo.map(photo => {
                return {
                    id: photo.id,
                    fullSizeUrl: photo.url_l,
                    previewUrl: photo.url_q,
                    flickrRedirectUrl: `https://www.flickr.com/photos/${photo.owner}/${photo.id}`,
                    title: photo.title,
                    description: photo.description._content,
                    username: photo.ownername
                }
            })
            res.status(200).json(photos);
        })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))