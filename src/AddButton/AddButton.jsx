import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';

import database, {User} from '../firebase-setup.js'


import {Grid, Col, Row} from 'react-bootstrap';

// import firebase from 'firebase';


class AddButton extends Component {


  postDataHandler = () => {
    database.ref('shows/' + User.user.uid).push({
      title: this.props.showTitle,
      genre: this.props.showGenre,
      image: this.props.showImage
    });
    // ref.set({
    //   title: this.props.showTitle,
    //   genre: this.props.showGenre
    // });
  }


  render() {
    return(
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <FlatButton
              label="Add to WatchList"
              fullWidth={true}
              backgroundColor="#E53935"
              hoverColor="#FFCDD2"
              rippleColor="#F44336"
              onClick={this.postDataHandler}
              type='submit'>
            </FlatButton>
          </Col>
          <Col xsHidden md={4}></Col>
        </Row>
      </Grid>
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
