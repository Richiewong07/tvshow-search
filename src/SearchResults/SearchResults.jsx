import React, { Component } from 'react';

import classes from './SearchResults.css'

import {Grid, Col} from 'react-bootstrap';


class SearchResults extends Component {
  render() {
    return(
      <Grid className={classes.Background}>
        <Col xs={6} md={4}>
          <img className={classes.Image} src={this.props.showImage} alt="poster"/>
        </Col>
        <Col xs={6} md={4}>
          <h1>{this.props.showTitle}</h1>
          <h2>Summary:</h2>
          <p>{this.props.showSummary}</p>
        </Col>
        <Col xsHidden md={4}>
          <h2>Show Info:</h2>
          <p>Genre: {this.props.showGenre}</p>
          <p>Ratings: {this.props.showRating}</p>
        </Col>
      </Grid>
    )
  }
}





export default SearchResults;
