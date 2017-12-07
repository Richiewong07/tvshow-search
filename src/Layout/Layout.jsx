import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';

import axios from 'axios';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ' ',
      summary: ' ',
      rating: ' ',
      image: ' ',
      genre: [],
    }
  }


  componentDidMount() {
    axios.get('http://api.tvmaze.com/singlesearch/shows', {
      params: {
        q : 'stranger-things'
      }
    })
    .then(response => {
      this.setState({
        title: response.data.name,
        summary: response.data.summary,
        rating: response.data.rating.average,
        image: response.data.image.medium,
        genre: response.data.genres,
      });
      console.log(response.data.genres)
    })
    .catch(error => {
      console.log('Error fetching or parsing data'(error))
    });
  }


  render () {

    let editedSummary = this.state.summary.replace(/(<p>|<b>|<\/p>|<\/b>)/g, '')

    let spiltGenre = this.state.genre.join(', ');

    return(
      <div>
        <div>Toolbar</div>
        <div>Sidedrawer</div>
        <Searchbar/>
        <SearchResults
        showTitle={this.state.title}
        showSummary={editedSummary}
        showRating={this.state.rating}
        showImage={this.state.image}
        showGenre={spiltGenre}
      />
    </div>
    )
  }
}

export default Layout;
