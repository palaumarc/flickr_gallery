const fetch = require('node-fetch');
const config = require('../config')
const express = require('express');
const app = express();

app.use('/', express.static('../client/build'));

app.get('/api/photos', (req, res) => {

    const perPage = req.query.per_page;
    const page = req.query.page;

    const fetchPhotos = (page, perPage) => {

        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${config.apiKey}&extras=url_l%2C+url_q%2C+description%2C+media%2C+owner_name&format=json&nojsoncallback=1`;

        if (perPage) {
            url += `&per_page=${perPage}`;
        }

        if (page) {
            url += `&page=${page}`;
        }

        return fetch(url).then(response => response.json())
    }

    fetchPhotos(page, perPage)
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
            const hasMore = data.photos.page < data.photos.pages;
            res.status(200).json({photos, hasMore});
        })
});

module.exports = app;