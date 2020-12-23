import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppStart from './AppStart'
import AppUser from './AppUser'
import AppService from './AppService'
// import Home from './comps/user/Home'
// import AllCategories from './comps/user/AllCategories'
// import Events from './comps/user/EventsTable'
// import InvitedTable from './comps/user/InvitedTable'
// import ShoppingList from './comps/user/ShoppingList'
// import Calendar from './comps/user/Calendar'
// import AllServices from './comps/user/AllServices'
// import ServiceCard from './comps/user/ServiceCard'
import Login from './comps/start/User/Login/login';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={AppStart} />
                        <Route exact path="/appuser" component={AppUser} />
                        <Route exact path="/appservice" component={AppService} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </Router>)
            </div>
        );
    }
}
export default App;