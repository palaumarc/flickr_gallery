const express = require('express');
const photosService = require('../service/photos');
const app = express();

app.use('/', express.static('../client/build'));

app.get('/api/photos', (req, res) => {

    const perPage = req.query.per_page;
    const page = req.query.page;

    photosService.getRecentPhotos(page, perPage)
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).json(`Server internal error: ${error.message}`))

});

module.exports = app;