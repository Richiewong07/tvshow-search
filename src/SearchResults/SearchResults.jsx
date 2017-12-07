import React from 'react';


const searchResults = (props) => (
  <div>
    <h1>{props.showTitle}</h1>
    <p>Genre: {props.showGenre}</p>
    <p>Ratings: {props.showRating}</p>
    <h2>Show Description:</h2>
    <p>{props.showSummary}</p>
    <img src={props.showImage} alt="poster"/>
  </div>
)

export default searchResults;
