import React from 'react';
import './App.css';
import Home from './comps/service/HomeService'
import CalendarService from './comps/service/CalendarService'
import Advertising from './comps/service/Advertising'
import HeaderService from './comps/service/HeaderService'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Start from './comps/Start'
function AppService() {
  return (

    <Router>
      <div className="App">
        <HeaderService />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/CalendarService" component={CalendarService} />
          <Route exact path="/Advertising" component={Advertising} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppService;
