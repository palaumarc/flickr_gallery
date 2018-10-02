const fetch = require('node-fetch');
const config = require('../config')

const fetchRecentPhotos = (page, perPage) => {

    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${config.apiKey}&extras=url_l%2C+url_q%2C+description%2C+media%2C+owner_name&format=json&nojsoncallback=1`;

    if (perPage) {
        url += `&per_page=${perPage}`;
    }

    if (page) {
        url += `&page=${page}`;
    }

    return fetch(url)
        .then(response => response.json())
}

const convertFetchRecentPhotosResponseToServiceStructure = response => {
    const photos = response.photos.photo.map(photo => {
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

    const hasMore = response.photos.page < data.photos.pages;

    return {
        photos,
        hasMore
    }
}

const fetchRecentPhotosAndConvertToServiceStructure = () => fetchRecentPhotos(page, perPage).then(convertFetchRecentPhotosResponseToServiceStructure)

module.exports = {
    fetchRecentPhotos: fetchRecentPhotosAndConvertToServiceStructure
}