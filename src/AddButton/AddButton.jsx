import React from 'react';

import { withRouter } from 'react-router-dom'



const addButton = withRouter(({history}) => (
  <div>
    <button
      type='button'
      onClick={() => {history.push('/watchlist')}}>Add To WatchList</button>
  </div>
))

export default addButton;
