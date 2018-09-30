import React, { Component, Fragment } from 'react';

import Spin from './Spin';
import Gallery from './Gallery';
import PhotoDetail from './PhotoDetail';
import Lightbox from './Lightbox';
import { fetchPhotos } from '../services/ApiCalls';
import Carousel from './Carousel';

class GalleryContainer extends Component {

    state = {
        isLoading: false,
        photos: [],
        selectedPhotoIndex: null
    }

    onClickPhoto = selectedPhotoIndex => this.setState({...this.state, selectedPhotoIndex});
    
    onClosePhotoDetail = () => this.setState({...this.state, selectedPhotoIndex: null});

    async componentDidMount() {
        this.setState({...this.state, isLoading: true});
        const photos = await fetchPhotos();
        this.setState({...this.state, isLoading: false, photos});
    }

    render() {

        const { isLoading, photos, selectedPhotoIndex } = this.state;

        if (isLoading) {
            return <Spin />;
        }

        return (
            <Fragment>
                <Gallery>
                    {photos.map((photo, index) => <Gallery.Photo key={photo.id} photo={photo} onClick={() => this.onClickPhoto(index)}/>)}
                </Gallery>
                {selectedPhotoIndex !== null ?
                <Lightbox onClose={this.onClosePhotoDetail}>
                    <Carousel defaultIndex={selectedPhotoIndex}>
                        {photos.map((photo) => <PhotoDetail key={photo.id} photo={photo} />)}
                    </Carousel>
                </Lightbox> 
                : null}
            </Fragment>
        );
    }
}

export default GalleryContainer;
