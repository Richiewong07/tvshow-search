import React from 'react';


import classes from './SearchResults.css'



const searchResults = (props) => (

  <div className={classes.SearchResults}>
    <div>
      <h1>{props.showTitle}</h1>
      <p>Genre: {props.showGenre}</p>
      <p>Ratings: {props.showRating}</p>
      <h2>Show Description:</h2>
      <p>{props.showSummary}</p>
    </div>
    <div>
      <img src={props.showImage} alt="poster"/>
    </div>
  </div>
)

export default searchResults;
