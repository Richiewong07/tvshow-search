import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ' '
    }
  }


  showSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
    console.log(event.target.value)
  }

  submitHandler = (event) => {
    console.log('Submitted: ', this.state.searchTerm);
    event.preventDefault();
  }


  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
        <input
          type="text"
          ref="query"
          value={this.state.searchTerm}
          onChange={this.showSearchHandler} />
        <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

  export default SearchBar;
