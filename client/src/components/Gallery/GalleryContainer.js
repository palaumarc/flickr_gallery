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
        hasMorePhotos: true,
        currentPage: 0,
        selectedPhotoIndex: null
    }

    onClickPhoto = selectedPhotoIndex => this.setState(prevState => ({...prevState, selectedPhotoIndex}));
    
    onClosePhotoDetail = () => this.setState(prevState => ({...prevState, selectedPhotoIndex: null}));

    loadPhotos = async () => {
        const pageToLoad = this.state.currentPage + 1;
        const {photos, hasMore} = await fetchPhotos(pageToLoad, PHOTOS_PER_PAGE);
        this.setState(prevState => ({
            ...this.prevState, 
            currentPage: pageToLoad, 
            photos: prevState.photos.concat(photos),
            hasMorePhotos: hasMore
        }));
    }

    render() {

        const { photos, selectedPhotoIndex, hasMorePhotos } = this.state;

        return (
            <Fragment>
                <InfiniteScroll loadMore={this.loadPhotos} hasMore={hasMorePhotos}>
                    <Gallery>
                        {photos.map((photo, index) => <Gallery.Photo key={`${photo.id}-${index}`} photo={photo} onClick={() => this.onClickPhoto(index)}/>)}
                    </Gallery>
                </InfiniteScroll>
                {selectedPhotoIndex !== null ?
                <Lightbox onClickCloseButton={this.onClosePhotoDetail}>
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
