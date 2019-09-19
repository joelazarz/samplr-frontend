import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import LandingPage from './components/open/LandingPage';
import Discovery from './components/discovery/Discovery';
import Kit from './components/kit/Kit';
import User from './components/userDashboard/User';
import AddKitBtn from './components/layout/AddKitBtn';
import AddKitModal from './components/layout/AddKitModal';

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {
  
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  })

  return (
    <Router>
      <Switch>
      <Provider store={store}>

        <Route exact path='/' render={props => (
          <Fragment>
          <LandingPage />
          </Fragment>
        )} />

        <Route exact path='/discovery' render={props => (
          <Fragment>
          <Discovery />
          <AddKitBtn />
          <AddKitModal />
          </Fragment>
        )} />

        <Route exact path='/kit' render={props => (
          <Fragment>
          <Kit />
          </Fragment>
        )} />

        <Route exact path='/user' render={props => (
          <Fragment>
          <User />
          <AddKitBtn />
          <AddKitModal />
          </Fragment>
        )} />

      </Provider>
      </Switch>
    </Router>
  );
}

export default App;
