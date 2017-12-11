import React, { Component } from 'react';

import database, {User} from '../firebase-setup.js'

// import firebase from 'firebase';


class AddButton extends Component {




  postDataHandler = () => {
    database.ref('shows/' + User.user.uid).push({
      title: this.props.showTitle,
      genre: this.props.showGenre
    });
    // ref.set({
    //   title: this.props.showTitle,
    //   genre: this.props.showGenre
    // });
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
