import React, { Component } from 'react';
import { getDataFromLocalStorage } from '../../utils/common';

class GiphyDetail extends Component {
  handleData = () => {
    const { match } = this.props;
    const storedData = getDataFromLocalStorage('giphy');

    return storedData.filter(item => item.id === match.params.id)[0];
  }

  render() {
    const { title, images } = this.handleData();
    console.log(this.handleData());
    return (
      <div>
        <h2>{ title }</h2>
        <div className="main-info">
          <img src={ images.original.url } alt="#" />
        </div>
      </div>
    )
  }
}

export default GiphyDetail;