

import React, { useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Signin from './Signin/signin';
import Login from './Login/login'

export default function User() {

    // const [component, setComponent] = useState(<Signin />)


    return (
        <div>

            <Signin />


        </div>

    );
}