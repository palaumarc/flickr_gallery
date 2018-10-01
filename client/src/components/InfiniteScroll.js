import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Spin from './Spin';

class InfiniteScroll extends Component {

  static propTypes = {
      loadMore: PropTypes.func.isRequired,
      hasMore: PropTypes.bool
  }

  static defaultProps = {
      hasMore: true
  }

  state = {
      isLoading: false
  }

  onScroll = () => {
      const { isLoading } = this.state;

      if (isLoading) return;

      // Checks that the page has scrolled to the bottom
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        this.execLoadMore();
      }
  };

  execLoadMore = async () => {
      this.setState(prevState => ({...prevState, isLoading: true}));
      await this.props.loadMore()
      this.setState(prevState => ({...prevState, isLoading: false}));

      if (!this.props.hasMore) {
          document.removeEventListener('scroll', this.onScroll);
      }
  }

  async componentDidMount() {
    document.addEventListener('scroll', this.onScroll);

    // Keep loading until available height is filled or there are no more elements
    while (document.documentElement.offsetHeight < window.innerHeight && this.props.hasMore) {
      await this.execLoadMore();
    }
  }

  render() {
    return (
        <Fragment>
            {this.props.children}
            {this.state.isLoading ? <Spin /> : null}
        </Fragment>
    )
  }
}

export default InfiniteScroll;