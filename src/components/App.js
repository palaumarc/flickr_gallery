import React, { Component, Fragment } from 'react';
import GalleryContainer from './GalleryContainer';
import PhotoDetail from './PhotoDetail';

class App extends Component {

  state = {
    selectedPhoto: null
  }

  onClickPhoto = selectedPhoto => this.setState({...this.state, selectedPhoto});

  onClosePhotoDetail = () => this.setState({...this.state, selectedPhoto: null})

  render() {

    const photoDetail = (this.state.selectedPhoto) ?
      <PhotoDetail photo={this.state.selectedPhoto} onClose={this.onClosePhotoDetail}/> : null;

    return (
      <Fragment>
        <GalleryContainer onClickPhoto={this.onClickPhoto}/>
        {photoDetail}
      </Fragment>
    );
  }
}

export default App;
