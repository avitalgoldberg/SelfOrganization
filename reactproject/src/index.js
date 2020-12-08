import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppService from './AppService';
// import AppUser from './AppUser';
// import AppManager from './AppManager'
import * as serviceWorker from './serviceWorker';
// import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <React.StrictMode>
    <AppService />
    {/* <AppUser />  */}

    {/* <App /> */}
    {/* <AppManager /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
