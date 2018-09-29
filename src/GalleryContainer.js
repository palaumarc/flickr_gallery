import React, { Component } from 'react';

import Spin from './Spin';

class GalleryContainer extends Component {

    state = {
        isLoading: false,
        photos: []
    }

    componentDidMount() {
        this.setState({...this.state, isLoading: true});
        const photos = await fetchPhotos();
        this.setState({...this.state, isLoading: false, photos});
    }

    render() {

        if (this.state.isLoading) {
            return <Spin />;
        }

        return <Gallery photos={this.state.photos} />;
    }
}

export default GalleryContainer;
