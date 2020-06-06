import React from 'react';
import { connect } from 'react-redux';

import {
  Link,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";

import {
  UserPage,
  HomePage,
  AboutPage,
} from 'pages';

import { hide } from 'actions';
import Modal from 'components/Modal';

function App({ isShow, hide, msg }) {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="user">User</Link></li>
        </ul>
        <Switch>
          <Route path="/about"><AboutPage /></Route>
          <Route path="/user"><UserPage /></Route>
          <Route path="/"><HomePage /></Route>
        </Switch>
      </BrowserRouter>
      { isShow && (
        <Modal onClose={hide}>
          {msg}
        </Modal>
      )}
    </div>
  );
}


const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hide()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);