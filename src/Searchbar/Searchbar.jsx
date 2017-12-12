import React, { Component } from 'react';

import SearchResults from '../SearchResults/SearchResults';
import AddButton from '../AddButton/AddButton';
import axios from 'axios';

import classes from './Searchbar.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ' ',
      title: ' ',
      summary: ' ',
      rating: ' ',
      image: ' ',
      genre: [],
    }
  }

  componentWillMount() {
    this.search();
  }

  updateSearchHandler = (event) => {
    this.search(this.refs.query.value);
  }

  search(query = "stranger-things") {
    const url = `http://api.tvmaze.com/singlesearch/shows?q=${query}`;
    axios.get(url).then(response => {
      this.setState({
        title: response.data.name,
        summary: response.data.summary,
        rating: response.data.rating.average,
        image: response.data.image ? response.data.image.medium : "No image",
        genre: response.data.genres,
      });
    })
  }

  render() {
    let editedSummary = this.state.summary.replace(/(<p>|<b>|<\/p>|<\/b>)/g, '')
    let spiltGenre = this.state.genre.join(', ');

    return(
      <div className={classes.Background}>
        <input
          className={classes.Search}
          type="text"
          ref="query"
          onChange={this.updateSearchHandler}/>

        <SearchResults
        showTitle={this.state.title}
        showSummary={editedSummary}
        showRating={this.state.rating}
        showImage={this.state.image}
        showGenre={spiltGenre}/>

      <AddButton
        showTitle={this.state.title}
        showGenre={spiltGenre}/>
      </div>
    )
  }
}

  export default Searchbar;
