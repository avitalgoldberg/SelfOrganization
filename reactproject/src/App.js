import React from 'react';
import './App.css';
import Home from './comps/user/Home'
import AllCategories from './comps/user/AllCategories'
import Events from './comps/user/EventsTable'
import InvitedTable from './comps/user/InvitedTable'
import ShoppingList from './comps/user/ShoppingList'
import Calendar from './comps/user/Calendar'
import Header from './comps/user/Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Start from './comps/Start'
function App() {
  return (

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
