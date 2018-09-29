export const fetchPhotos = async () => {
    const response = await fetch('/api/photos');
    const data = await response.json();
    return data;
};