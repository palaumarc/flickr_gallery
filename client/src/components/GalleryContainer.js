import React, { Component, Fragment } from 'react';

import Spin from './Spin';
import Gallery from './Gallery';
import PhotoDetail from './PhotoDetail';
import { fetchPhotos } from '../services/ApiCalls';

class GalleryContainer extends Component {

    state = {
        isLoading: false,
        photos: [],
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
