export const fetchPhotos = async (page, photosPerPage) => {
    var url = '/api/photos';

    const params = {
        page,
        per_page: photosPerPage
    };

    let encodedQueryParams = encodeQueryParams(params);

    if (encodedQueryParams) {
        url += '?' + encodedQueryParams;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        // In error case, the server will send the error message in the body response
        throw new Error(data);
    }

    return data;
};

const encodeQueryParams = (params) => {
    return Object.keys(params)
        .map(k => (params[k] !== undefined) ? encodeURIComponent(k) + '=' + encodeURIComponent(params[k]) : null)
        .filter(encodedQueryParam => encodedQueryParam !== null)
        .join('&');
}