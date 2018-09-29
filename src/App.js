import React, { Component, Fragment } from 'react';
import './App.css';
import GalleryContainer from './GalleryContainer';
import PhotoDetailContainer from './PhotoDetailContainer';

class App extends Component {

  state = {
    selectedPhoto: null
  }

  onClickPhoto = selectedPhoto => this.setState({...this.state, selectedPhoto});

  onClosePhotoDetail = () => this.setState({...this.state, selectedPhoto: null})

  render() {

    const photoDetailContainer = (this.state.selectedPhoto) ?
      <PhotoDetailContainer photo={this.state.selectedPhoto} onClose={this.onClosePhotoDetail}/> : null;

    return (
      <Fragment>
        <GalleryContainer onClickPhoto={this.onClickPhoto}/>
        {photoDetailContainer}
      </Fragment>
    );
  }
}

export default App;
