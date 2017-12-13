import React, { Component } from 'react';

import classes from './SearchResults.css';

import {Grid, Col, Row} from 'react-bootstrap';


class SearchResults extends Component {
  render() {
    return(
      <Grid className={classes.Background}>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <h1>{this.props.showTitle}</h1>
            <h2>Summary:</h2>
            <p>{this.props.showSummary}</p>
          </Col>
          <Col xs={6} md={4}>
            <img className={classes.Image} src={this.props.showImage} alt="poster"/>
          </Col>
          <Col xsHidden md={4}>
            <h2>Show Info:</h2>
            <p><strong>Genre:</strong> {this.props.showGenre}</p>
            <p><strong>Ratings:</strong> {this.props.showRating}</p>
            <p><strong>Premiered:</strong> {this.props.showPremiered}</p>
            <p><strong>Network:</strong> {this.props.showNetwork}</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}





export default SearchResults;
