import React, { Component } from 'react';
import './Carousel.css'

class Carousel extends Component {

    state = {
        selectedIndex: (this.props.defaultIndex === undefined) ? 0 : this.props.defaultIndex
    }

    selectNext = () => {
        const newIndex = this.state.selectedIndex + 1;
        this.setState({...this.state, selectedIndex: newIndex});
    }

    selectPrevious = () => {
        const newIndex = this.state.selectedIndex - 1;
        this.setState({...this.state, selectedIndex: newIndex});
    }

    render() {
        return (
            <div className="carousel">
                <div className="carousel-content">
                    {React.Children.toArray(this.props.children)[this.state.selectedIndex]}
                </div>
                <div className="carousel-controls">
                    <div className="carousel-controls-previous" onClick={this.selectPrevious}>&lt;</div>
                    <div className="carousel-controls-next" onClick={this.selectNext}>&gt;</div>
                </div>
            </div>
        )

    }   

}

export default Carousel;