import React, { Component, Fragment } from 'react';
import Spin from './Spin';

class InfiniteScroll extends Component {

  state = {
    isLoading: false
  }

   // Binds our scroll event handler
  onscroll = () => {
    const { isLoading } = this.state;

    // Bails early if:
    // * there's an error
    // * it's already loading
    // * there's nothing left to load
    if (isLoading) return;

    // Checks that the page has scrolled to the bottom
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      this.execLoadMore();
    }
  };

  execLoadMore = async () => {
      this.setState({isLoading: true})
      await this.props.loadMore()
      this.setState({isLoading: false})

      if (!this.props.hasMore) {
          document.removeEventListener('scroll', this.onscroll);
      }
  }

  async componentDidMount() {
    document.addEventListener('scroll', this.onscroll);

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