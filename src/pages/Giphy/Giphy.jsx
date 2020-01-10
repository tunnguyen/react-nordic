import React, { Component } from 'react';
import { saveDataToLocalStorage, getDataFromLocalStorage } from '../../utils/common';
import GiphyItem from '../../components/GiphyItem';
import './giphy.scss';

class Giphy extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search: '',
      offset: 0,
      loading: false
    }
  }

  componentDidMount() {
    this.fetchGiphy('https://api.giphy.com/v1/gifs/trending?limit=20');
  }

  fetchGiphy = (url, more) => {
    this.setState({ loading: true });
    fetch(`${url}&api_key=s6iv3qb8HGC9kRtpZrnprMquECmn4dd0`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(res => {
      let data = res.data;
      let offset = this.state.offset;

      if (more) {
        const storedData = getDataFromLocalStorage('giphy');
        data = [ ...storedData, ...data ];
        offset = offset + 20;
      }

      this.setState({ data, offset })
      saveDataToLocalStorage('giphy', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    .finally(() => this.setState({ loading: false }))
  }

  onSearch = () => {
    const { search } = this.state;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ search }`;
    this.fetchGiphy(url);
  }

  loadMoreGifs = () => {
    const offset = this.state.offset + 20;
    const url = `https://api.giphy.com/v1/gifs/trending?limit=20&offset=${ offset }`;
    this.fetchGiphy(url, true);
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div className="giphy">
        <div className="search">
          <input name="search" onChange={ e => this.setState({ search: e.target.value }) }/>
          <button onClick={ this.onSearch }>Seach gifs</button>
        </div>
        <h1>Gif images</h1>
        <div className="giphy-list">
          {data.map((item, idx) => 
            <GiphyItem 
              key={ idx }
              id={ item.id }
              img={ item.images.original.url } 
              title={ item.title } 
              />
          )}
        </div>
        <div className="buttons">
          {!loading && <button className="button" onClick={ this.loadMoreGifs }>Load more</button>}
        </div>
      </div>
    )
  }
}

export default Giphy;