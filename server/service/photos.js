const flickrApi = require('../dataAccess/flickr.api');

const getRecentPhotos = (page, perPage) => {
    return flickrApi.fetchRecentPhotos(page, perPage);
}

module.exports = {
    getRecentPhotos
}