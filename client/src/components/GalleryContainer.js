import React, { Component, Fragment } from 'react';

import Spin from './Spin';
import Gallery from './Gallery';
import PhotoDetail from './PhotoDetail';
import { fetchPhotos } from '../services/ApiCalls';

class GalleryContainer extends Component {

    state = {
        isLoading: false,
        photos: [],
        selectedPhoto: null
    }

    onClickPhoto = selectedPhoto => this.setState({...this.state, selectedPhoto});
    
    onClosePhotoDetail = () => this.setState({...this.state, selectedPhoto: null})

    async componentDidMount() {
        this.setState({...this.state, isLoading: true});
        const photos = await fetchPhotos();
        this.setState({...this.state, isLoading: false, photos});
    }

    render() {

        const { selectedPhoto, isLoading, photos } = this.state;

        if (isLoading) {
            return <Spin />;
        }

        return (
            <Fragment>
                <Gallery>
                    {photos.map(photo => <Gallery.Photo key={photo.id} photo={photo} onClick={() => this.onClickPhoto(photo)}/>)}
                </Gallery>
                {selectedPhoto ? <PhotoDetail photo={selectedPhoto} onClose={this.onClosePhotoDetail}/> : null}
            </Fragment>
        );
    }
}

export default GalleryContainer;
