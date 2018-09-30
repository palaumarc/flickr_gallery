import React, { Component, Fragment } from 'react';

import Spin from './Spin';
import Gallery from './Gallery';
import PhotoDetail from './PhotoDetail';
import { fetchPhotos } from '../services/ApiCalls';

class GalleryContainer extends Component {

    state = {
        isLoading: false,
        photos: [],
        selectedPhoto: null,
        selectedPhotoIndex: null
    }

    onClickPhoto = (selectedPhoto, selectedPhotoIndex) => this.setState({...this.state, selectedPhoto, selectedPhotoIndex});
    
    onClosePhotoDetail = () => this.setState({...this.state, selectedPhoto: null});

    selectedNextPhoto = () => {
        const newIndex = this.state.selectedPhotoIndex + 1;
        this.setState({...this.state, selectedPhoto: this.state.photos[newIndex], selectedPhotoIndex: newIndex});
    }

    selectPreviousPhoto = () => {
        const newIndex = this.state.selectedPhotoIndex - 1;
        this.setState({...this.state, selectedPhoto: this.state.photos[newIndex], selectedPhotoIndex: newIndex});
    }

    async componentDidMount() {
        this.setState({...this.state, isLoading: true});
        const photos = await fetchPhotos();
        this.setState({...this.state, isLoading: false, photos});
    }

    render() {

        const { selectedPhoto, isLoading, photos, selectedPhotoIndex } = this.state;

        if (isLoading) {
            return <Spin />;
        }

        return (
            <Fragment>
                <Gallery>
                    {photos.map((photo, index) => <Gallery.Photo key={photo.id} photo={photo} onClick={() => this.onClickPhoto(photo, index)}/>)}
                </Gallery>
                {selectedPhoto ? 
                <PhotoDetail 
                    photo={selectedPhoto} 
                    onClose={this.onClosePhotoDetail}
                    onClickNext={this.selectedNextPhoto}
                    hasNext={selectedPhotoIndex < photos.length - 1}
                    onClickPrevious={this.selectPreviousPhoto}
                    hasPrevious={selectedPhotoIndex > 0}
                /> 
                : null}
            </Fragment>
        );
    }
}

export default GalleryContainer;
