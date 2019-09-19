import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Discovery from './components/discovery/Discovery';

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {
  
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  })

  return (
    <Provider store={store}>
      <Discovery />
    </Provider>
  );
}

export default App;
