import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import bookAdd from './components/Add/bookAdd'

import bookList from './components/List/bookList'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>

          <Switch>
            <Route exact path="/" component={bookList} />
            <Route exact path="/Create" component={bookAdd} />

          </Switch>

        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
