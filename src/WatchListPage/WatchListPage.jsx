import React, { Component } from 'react';

// import AddedShows from '../AddedShows/AddedShows';

import database, {User} from '../firebase-setup.js'

// import firebase from 'firebase';

class WatchListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfShows: []
    };
  }

  componentDidMount() {
    database.ref('shows/' + User.user.uid).on('child_added', snapshot => {
      const newList = this.state.listOfShows;
      newList.push({
        showId: snapshot.key,
        title: snapshot.val().title,
        genre: snapshot.val().genre
      });
      this.setState({
        listOfShows: newList
      });
      console.log('test', JSON.stringify(newList))
    });
  }


  // removeDataHandler(key) {
  //   database.ref().child(key).remove();
  //   const = newListArray =
  // }



  // componentDidMount() {
  //   database.ref('shows/' + User.user.uid).once('value', snapshot => {
  //     snapshot.forEach(child => {
  //       this.setState({
  //         showID: this.state.showID.concat([child.key]),
  //         title: this.state.title.concat([child.val().title]),
  //         genre: this.state.genre.concat([child.val().genre])
  //       });
  //
  //       const showList = this.state.showID.map((showList, index) =>
  //         <div key={index}>
  //           {this.state.title[index]}
  //           {this.state.genre[index]}
  //         </div>
  //       );
  //       this.setState({
  //         shows: showList
  //       });
  //     });
  //   });
  // };

  // componentWillMount() {
  //   database.ref('shows/' + User.user.uid).once('value').then((snapshot) => {
  //     var shows_info = snapshot.val();
  //     this.setState({
  //       title: shows_info.title,
  //       genre: shows_info.genre
  //     });
  //   });
  // }




  render() {
    const listOfShows = this.state.listOfShows.map((show) =>
      <li
        key={show.showId}
        onClick={this.removeDataHandler}
        >{show.title} {show.genre}
      </li>
    );

    return (
      <div>
        {listOfShows}
      </div>
    );
  }
}

export default WatchListPage
