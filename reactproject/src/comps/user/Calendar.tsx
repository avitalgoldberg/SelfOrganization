import React, { Component } from 'react';
import './Calendar.css';
import Callendar from './Callendar'
//var Hebcal = require('hebcal')

class Calendar extends Component {
    render() {
        return (
            <div className="parent">
                <div>Calendar</div>
                <div className="div1">
                    <Callendar />
                </div>
                <div className="filter">
                    <div className="clean"></div>
                </div>
                <div className="back"></div>
                <div className="next"></div>
            </div>
        )
    }
}
export default Calendar;