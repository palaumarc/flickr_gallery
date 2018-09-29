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

        if (this.state.isLoading) {
            return <Spin />;
        }

        const photoDetail = (this.state.selectedPhoto) ?
        <PhotoDetail photo={this.state.selectedPhoto} onClose={this.onClosePhotoDetail}/> : null;

        return (
            <Fragment>
                <Gallery photos={this.state.photos} />
                {photoDetail}
            </Fragment>
        );
    }
}

export default GalleryContainer;
