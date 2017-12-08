import React, { Component } from 'react';

import firebase from 'firebase';


class AddButton extends Component {

  postDataHandler = () => {
    const data = {
      title: this.props.showTitle,
      genre: this.props.showGenre
    }
    firebase.database().ref('shows').set(data);
  }

  render() {
    return(
      <div>
        <button
          onClick={this.postDataHandler}
          type='submit'>Add to Watch List
        </button>
      </div>
    );
  }
}

export default AddButton;

// const addButton = withRouter(({history}) => (
//
//   <div>
//     <button
//       type='button'
//       // onClick={() => {history.push('/watchlist')}}>Add To WatchList
//
//     </button>
//   </div>
// ))
