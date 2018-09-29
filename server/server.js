const express = require('express');
const app = express();
const port = 8080;

const photosMock = [
    {
        id: 12,
        fullSizeUrl: 'https://dummyimage.com/600x400/000/fff',
        previewUrl: 'https://dummyimage.com/600x400/000/fff',
        flickrRedirectUrl: 'https://google.com',
        title: 'MockPhoto',
        description: 'This is a great mock photo',
        username: 'Woody'
    },
    {
        id: 13,
        fullSizeUrl: 'https://dummyimage.com/300x400/000/fff',
        previewUrl: 'https://dummyimage.com/300x400/000/fff',
        flickrRedirectUrl: 'https://google.com',
        title: 'MockPhoto2',
        description: 'This is a great second mock photo',
        username: 'Buzz'
    },
    {
        id: 14,
        fullSizeUrl: 'https://dummyimage.com/300x200/000/fff',
        previewUrl: 'https://dummyimage.com/300x200/000/fff',
        flickrRedirectUrl: 'https://google.com',
        title: 'MockPhoto3',
        description: 'This is a great third mock photo',
        username: 'Jessie'
    }
]

app.use('/', express.static('../client/build'));

app.get('/api/photos', (req, res) => res.status(200).json(photosMock));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))