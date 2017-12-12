import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';

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
        <FlatButton
          label="Add to WatchList"
          fullWidth={true}
          onClick={this.postDataHandler}
          type='submit'>
        </FlatButton>
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
