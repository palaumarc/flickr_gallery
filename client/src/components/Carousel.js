import React, { Component } from 'react';
import './Carousel.css'

const DEFAULT_INDEX = 0;

class Carousel extends Component {

    getStartIndex = () => {
        const { children, startIndex } = this.props;
        if (startIndex === undefined || startIndex < 0 || startIndex >= React.Children.count(children)) {
            return DEFAULT_INDEX;
        }

        return startIndex;
    }

    selectNext = () => {
        const newIndex = this.state.selectedIndex + 1;
        this.setState({...this.state, selectedIndex: newIndex});
    }

    selectPrevious = () => {
        const newIndex = this.state.selectedIndex - 1;
        this.setState({...this.state, selectedIndex: newIndex});
    }

    state = {
        selectedIndex: this.getStartIndex()
    }

    render() {

        const reactChildrenAsArray = React.Children.toArray(this.props.children);

        const previousControl = (this.state.selectedIndex > 0) ?
            <div className="carousel-controls-previous" onClick={this.selectPrevious}>&lt;</div> : null;

        const nextControl = (this.state.selectedIndex < reactChildrenAsArray.length - 1) ?
            <div className="carousel-controls-next" onClick={this.selectNext}>&gt;</div> : null;

        return (
            <div className="carousel">
                <div className="carousel-content">
                    {reactChildrenAsArray[this.state.selectedIndex]}
                </div>
                <div className="carousel-controls">
                    {previousControl}
                    {nextControl}
                </div>
            </div>
        )

    }   

}

export default Carousel;