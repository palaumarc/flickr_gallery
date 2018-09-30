import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Spin from './Spin';
import Gallery from './Gallery';
import PhotoDetail from './PhotoDetail';
import { fetchPhotos } from '../services/ApiCalls';

class GalleryContainer extends Component {

    state = {
        photos: [],
        selectedPhoto: null,
        currentPage: 0
    }

    onClickPhoto = selectedPhoto => this.setState({...this.state, selectedPhoto});
    
    onClosePhotoDetail = () => this.setState({...this.state, selectedPhoto: null})

    loadFunc = async () => {
        const pageToLoad = this.state.currentPage + 1;
        const newPhotos = await fetchPhotos(pageToLoad, 15);
        this.setState(prevState => ({
            ...this.prevState, 
            currentPage: pageToLoad, 
            photos: prevState.photos.concat(newPhotos)
        }));
    }

    render() {

        const { selectedPhoto, photos } = this.state;

        return (
            <Fragment>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={true}
                    loader={<Spin key='infinite-scroll-loader-id'/>}
                >
                    <Gallery>
                        {photos.map((photo, index) => <Gallery.Photo key={`${photo.id}-${index}`} photo={photo} onClick={() => this.onClickPhoto(photo)}/>)}
                    </Gallery>
                </InfiniteScroll>
                {selectedPhoto ? <PhotoDetail photo={selectedPhoto} onClose={this.onClosePhotoDetail}/> : null}
            </Fragment>
        );
    }
}

export default GalleryContainer;
