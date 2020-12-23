import React, { Component } from 'react';
// import { Button } from 'reactstrap';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   // Route,
//   // Link
// } from "react-router-dom";
// import Begin from './comps/start/Begin/begin'
// import Director from './components/Director/director'
// import Advertiser from './comps/start/Advertiser/advertiser'
// import User from './comps/start/User/user'
// import { formatDiagnostic } from 'typescript';
// import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Header from './comps/start/Header/header';
import NavTabs from './comps/start/Header/Tabs'
class AppStart extends Component {
  state = {

  }


  render() {
    return (

      // <Router>
      <div className="App">


        <Header />

        <NavTabs />

        {/* </Router> */}
      </div>



    )

  }
}

export default AppStart;
