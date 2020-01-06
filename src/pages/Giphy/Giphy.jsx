import React, { Component } from 'react';
import GiphyItem from '../../components/GiphyItem';
import './giphy.scss';

class Giphy extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: ''
    }
  }

  componentDidMount() {
    this.fetchGiphy('https://api.giphy.com/v1/gifs/trending?limit=20');
  }

  fetchGiphy = (url) => {
    fetch(`${url}&api_key=s6iv3qb8HGC9kRtpZrnprMquECmn4dd0`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(res => {
      this.setState({ data: res.data })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  onSearch = () => {
    const { search } = this.state;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ search }`;
    this.fetchGiphy(url);
  }

  render() {
    const { data } = this.state;

    return (
      <div className="giphy">
        <div className="search">
          <input name="search" onChange={ e => this.setState({ search: e.target.value }) }/>
          <button onClick={ this.onSearch }>Seach gifs</button>
        </div>
        <h1>Gif images</h1>
        <div className="giphy-list">
          {data.map((item, idx) => 
            <GiphyItem key={ idx } img={ item.images.original.url } title={ item.title } />
          )}
        </div>
      </div>
    )
  }
}

export default Giphy;