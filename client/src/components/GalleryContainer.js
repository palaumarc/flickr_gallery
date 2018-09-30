import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Spin from './Spin';
import Gallery from './Gallery';
import PhotoDetail from './PhotoDetail';
import { fetchPhotos } from '../services/ApiCalls';

class GalleryContainer extends Component {

    state = {
        photos: [],
        currentPage: 0,
        selectedPhotoIndex: null
    }

    onClickPhoto = selectedPhotoIndex => this.setState({...this.state, selectedPhotoIndex});
    
    onClosePhotoDetail = () => this.setState({...this.state, selectedPhotoIndex: null});

    selectNextPhoto = () => {
        const newIndex = this.state.selectedPhotoIndex + 1;
        this.setState({...this.state, selectedPhotoIndex: newIndex});
    }

    selectPreviousPhoto = () => {
        const newIndex = this.state.selectedPhotoIndex - 1;
        this.setState({...this.state, selectedPhotoIndex: newIndex});
    }

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

        const { photos, selectedPhotoIndex } = this.state;

        return (
            <Fragment>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={true}
                    loader={<Spin key='infinite-scroll-loader-id'/>}
                >
                    <Gallery>
                        {photos.map((photo, index) => <Gallery.Photo key={`${photo.id}-${index}`} photo={photo} onClick={() => this.onClickPhoto(index)}/>)}
                    </Gallery>
                </InfiniteScroll>
                {selectedPhotoIndex !== null ? 
                <PhotoDetail 
                    photo={photos[selectedPhotoIndex]} 
                    onClose={this.onClosePhotoDetail}
                    previousControl={selectedPhotoIndex > 0 ? <PhotoDetail.PreviousPhotoArrow onClick={this.selectPreviousPhoto}/> : null}
                    nextControl={selectedPhotoIndex < photos.length - 1 ? <PhotoDetail.NextPhotoArrow onClick={this.selectNextPhoto}/> : null}
                /> 
                : null}
            </Fragment>
        );
    }
}

export default GalleryContainer;
