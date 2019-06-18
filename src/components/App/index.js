import React, { Component } from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import Router from '../Router/Router';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Filter />
          <Shelf />
        </main>
        <Router/>
      </React.Fragment>
    );
  }
}

export default App;
