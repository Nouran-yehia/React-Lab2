import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UsersPage from './UsersPage';
import PostsPage from './PostsPage';

import Nav from './nav';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/users">
                <UsersPage />
              </Route>
              <Route exact path="/posts">
                <PostsPage />
              </Route>
              <Route exact path={"/users/:userId/posts"}>
                <PostsPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;