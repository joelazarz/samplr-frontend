import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import LandingPage from './components/open/LandingPage';
import Discovery from './components/discovery/Discovery';
import Kit from './components/kit/Kit';
import User from './components/userDashboard/User';
import AddKitBtn from './components/layout/AddKitBtn';
import AddKitModal from './components/layout/AddKitModal';
import GuideBtn from './components/layout/GuideBtn';
import GuideModal from './components/layout/GuideModal';

import Navbar from './components/layout/Navbar';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {
  const [user, setUser] = useState(null)
  const [nightMode, setNightMode] = useState(false)
  const [localStorageToken, setLocalStorageToken] = useState(false)

  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
    checkLocalStorage();
    autoLogin();
  }, [])

  const checkLocalStorage = () => {
    let checkToken = localStorage.getItem('token');
    if(checkToken) {
      setLocalStorageToken(true)
    };
  };

  const setSessionUser = (sessionUser) => {
    sessionUser.user.darkmode || null ? setNightMode(true) : setNightMode(false)
    setUser(sessionUser.user)
  }

  const autoLogin = () => {
    const token = localStorage.getItem('token')
    if(!token){ return; } 

    fetch('https://sampler-backend.herokuapp.com/autologin', {
      headers: {
        'accept': 'application/json',
        Authorization: token
      }
    })
    .then(resp => resp.json())
    .then(data => {
      setUser(data)
      // eslint-disable-next-line
      {data.darkmode ? setNightMode(true) : setNightMode(false)}
    })
  }

  const nightModeSwitch = () => {
    setNightMode(nightMode ? false : true)
    patchNightMode()
  }

  const patchNightMode = () => {
    let darkmode = { darkmode: !nightMode }
    fetch('https://sampler-backend.herokuapp.com/users', {
      method: 'PATCH',
        body: JSON.stringify(darkmode),
        headers: {
          'Content-Type': 'application/json'
        }
    })
  }

  return (
    <Router>
      <Switch>
      <Provider user={user} store={store}>

        <Route exact path='/' render={props => (
          <Fragment>
          <LandingPage user={user} localStorageToken={localStorageToken} setSessionUser={setSessionUser} />
          </Fragment>
        )} />

        <Route exact path='/discovery' render={props => (
          <Fragment>
          <Navbar nightModeSwitch={nightModeSwitch} nightMode={nightMode}/>
          <Discovery nightMode={nightMode} />
          {user ? <AddKitBtn /> : <></> }
          <AddKitModal nightMode={nightMode}/>
          </Fragment>
        )} />

        <Route exact path='/kits/:id' render={props => (
          <Fragment>
          <Navbar nightModeSwitch={nightModeSwitch} nightMode={nightMode}/>
          <Kit user={user} nightMode={nightMode} />
          <GuideBtn />
          <GuideModal nightMode={nightMode}/>
          </Fragment>
        )} />

        <Route exact path='/user' render={props => (
          <Fragment>
          <User user={user}/>
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
