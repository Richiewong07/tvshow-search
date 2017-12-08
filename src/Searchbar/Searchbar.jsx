import React, { Component } from 'react';

import SearchResults from '../SearchResults/SearchResults';
import AddButton from '../AddButton/AddButton';
import axios from 'axios';



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ' ',
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

  // submitHandler = (event) => {
  //   console.log('Submitted: ', this.state.searchTerm);
  //   event.preventDefault();
  // }

  search(query = "stranger-things") {
    const url = `http://api.tvmaze.com/singlesearch/shows?q=${query}`;
    axios.get(url).then(response => {
      this.setState({
        title: response.data.name,
        summary: response.data.summary,
        rating: response.data.rating.average,
        image: response.data.image.medium,
        genre: response.data.genres,
      });
      console.log(response.data.genres)
    })
  }



  render() {
    let editedSummary = this.state.summary.replace(/(<p>|<b>|<\/p>|<\/b>)/g, '')

    let spiltGenre = this.state.genre.join(', ');

    return(
      <div>
        <form
          onSubmit={this.submitHandler}>
        <input
          type="text"
          ref="query"
          onChange={this.updateSearchHandler} />
        </form>
        <SearchResults
        showTitle={this.state.title}
        showSummary={editedSummary}
        showRating={this.state.rating}
        showImage={this.state.image}
        showGenre={spiltGenre}
      />
      <AddButton
        showTitle={this.state.title}
        showGenre={spiltGenre}
       />
      </div>
    )
  }
}

  export default SearchBar;
