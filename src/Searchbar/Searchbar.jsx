import React, { Component } from 'react';

import SearchResults from '../SearchResults/SearchResults';
import AddButton from '../AddButton/AddButton';
import Aux from '../hoc/Aux';
import axios from 'axios';

import {Grid, Col, Row} from 'react-bootstrap';

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
      premiered: ' ',
      network: ' ',
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
        premiered: response.data.premiered,
        network: response.data.webChannel ? response.data.webChannel.name : "No Network Found",
      });
    })
  }

  render() {
    let editedSummary = this.state.summary.replace(/(<p>|<b>|<\/p>|<\/b>)/g, '')
    let spiltGenre = this.state.genre.join(', ');

    return(
      <Aux>
        <Grid className={classes.Background}>
          <Row className="show-grid">
            <Col xsHidden md={2}></Col>
            <Col xs={6} md={8}>
              <input
                placeholder="Search For Show Title"
                className={classes.Search}
                type="text"
                ref="query"
                onChange={this.updateSearchHandler}/>
            </Col>
            <Col xsHidden md={2}></Col>
          </Row>
        </Grid>

        <div>
          <SearchResults
          showTitle={this.state.title}
          showSummary={editedSummary}
          showRating={this.state.rating}
          showImage={this.state.image}
          showGenre={spiltGenre}
          showPremiered={this.state.premiered}
          showNetwork={this.state.network}/>

        <AddButton
          showTitle={this.state.title}
          showGenre={spiltGenre}
          showImage={this.state.image} />
        </div>
      </Aux>
    )
  }
}

  export default Searchbar;
