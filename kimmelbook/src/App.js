import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import bookAdd from './components/Add/bookAdd'
import bookInfo from './components/Info/bookInfo'
import bookList from './components/List/bookList'

class App extends Component {
  render() {
    return (
      <Router>

        <Switch>
          <Route exact path="/" component={bookList} />
          <Route exact path="/Create" component={bookAdd} />
          <Route exact path="/:bookId/Info" component={bookInfo} />
        </Switch>

      </Router>
    );
  }
}

export default App;
