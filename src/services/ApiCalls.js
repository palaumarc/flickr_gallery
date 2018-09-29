export const fetchPhotos = () => {
    //TODO: implement real call to server
    return new Promise(resolve => {
        setTimeout(() => resolve(photosMock), 2000);
    })
} 

const photosMock = [
    {
        id: 12,
        fullSizeUrl: 'https://dummyimage.com/600x400/000/fff',
        previewUrl: 'https://dummyimage.com/600x400/000/fff',
        flickrRedirectUrl: 'https://google.com',
        title: 'MockPhoto',
        description: 'This is a great mock photo',
        username: 'Woody'

    }
]