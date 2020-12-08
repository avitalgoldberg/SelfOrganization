import React from 'react';
import './App.css';
import Home from './comps/user/Home'
import AllCategories from './comps/user/AllCategories'
import Events from './comps/user/EventsTable'
import InvitedTable from './comps/user/InvitedTable'
import ShoppingList from './comps/user/ShoppingList'
import Calendar from './comps/user/Calendar'
import Header from './comps/user/Header'
import AllServices from './comps/user/AllServices'
import ServiceCard from './comps/user/ServiceCard'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Start from './comps/Start'
function AppUser() {
  return (

  //   <>
  //   <Header />
  //   <Route exact path={props.path} component={props.component} />

  // </>

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={AllCategories} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/invite" component={InvitedTable} />
          <Route exact path="/shoppinglist" component={ShoppingList} />
          <Route exact path="/services/:id" exact component={AllServices} />
          <Route exact path="/serviceCard/:id" exact component={ServiceCard} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppUser;
