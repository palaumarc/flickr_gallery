const fetch = require('node-fetch');
const config = require('../config')

const fetchRecentPhotos = (page, perPage) => {

    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${config.flickrApiKey}&extras=url_l%2C+url_q%2C+description%2C+media%2C+owner_name&format=json&nojsoncallback=1`;

    if (perPage) {
        url += `&per_page=${perPage}`;
    }

    if (page) {
        url += `&page=${page}`;
    }

    return fetch(url)
        .then(response => {
            return response.json()
                .then(responseData => {
                    //Throw error in case of Flickr API retrieved errors
                    if (!response.ok || responseData.stat === 'fail') {
                        throw new Error(responseData.message);
                    }

                    return responseData;
                })
            });
}

const convertFetchRecentPhotosResponseToServiceStructure = responseData => {
    const photos = responseData.photos.photo.map(photo => {
        return {
            id: photo.id,
            fullSizeUrl: photo.url_l,
            previewUrl: photo.url_q,
            originalPostUrl: `https://www.flickr.com/photos/${photo.owner}/${photo.id}`,
            title: photo.title,
            description: photo.description._content,
            username: photo.ownername
        }
    })

    const hasMore = responseData.photos.page < responseData.photos.pages;

    return {
        photos,
        hasMore
    }
}

const fetchRecentPhotosAndConvertToServiceStructure = (page, perPage) => {
    return fetchRecentPhotos(page, perPage).then(convertFetchRecentPhotosResponseToServiceStructure);
}

module.exports = {
    fetchRecentPhotos: fetchRecentPhotosAndConvertToServiceStructure
}