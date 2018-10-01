import React, { Component, Fragment } from 'react';
import InfiniteScroll from '../utils/InfiniteScroll';

import Gallery from './Gallery';
import PhotoDetail from './PhotoDetail';
import Lightbox from '../utils/Lightbox';
import Carousel from '../utils/Carousel';
import { fetchPhotos } from '../../services/ApiCalls';

const PHOTOS_PER_PAGE = 15;

class GalleryContainer extends Component {

    state = {
        photos: [],
        currentPage: 0,
        selectedPhotoIndex: null
    }

    onClickPhoto = selectedPhotoIndex => this.setState(prevState => ({...prevState, selectedPhotoIndex}));
    
    onClosePhotoDetail = () => this.setState(prevState => ({...prevState, selectedPhotoIndex: null}));

    loadPhotos = async () => {
        const pageToLoad = this.state.currentPage + 1;
        const newPhotos = await fetchPhotos(pageToLoad, PHOTOS_PER_PAGE);
        this.setState(prevState => ({
            ...this.prevState, 
            currentPage: pageToLoad, 
            photos: prevState.photos.concat(newPhotos)
        }));
    }

    render() {

        const { photos, selectedPhotoIndex } = this.state;

        return (
            <Fragment>
                <InfiniteScroll loadMore={this.loadPhotos} hasMore={true}>
                    <Gallery>
                        {photos.map((photo, index) => <Gallery.Photo key={`${photo.id}-${index}`} photo={photo} onClick={() => this.onClickPhoto(index)}/>)}
                    </Gallery>
                </InfiniteScroll>
                {selectedPhotoIndex !== null ?
                <Lightbox onClose={this.onClosePhotoDetail}>
                    <Carousel startIndex={selectedPhotoIndex}>
                        {photos.map((photo, index) => <PhotoDetail key={`${photo.id}-${index}`} photo={photo} />)}
                    </Carousel>
                </Lightbox> 
                : null}
            </Fragment>
        );
    }
}

export default GalleryContainer;