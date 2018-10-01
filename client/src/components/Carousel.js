import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Carousel.css'

class Carousel extends Component {

    static propTypes = {
        startIndex: PropTypes.number,
        children: PropTypes.node.isRequired,
    }

    static defaultProps = {
        startIndex: 0
    }

    state = {
        selectedIndex: this.props.startIndex
    }

    selectNext = () => {
        this.setState(prevState => ({...prevState, selectedIndex: prevState.selectedIndex + 1}));
    }

    selectPrevious = () => {
        this.setState(prevState => ({...prevState, selectedIndex: prevState.selectedIndex - 1}));
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