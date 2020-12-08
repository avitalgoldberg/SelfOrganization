import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import EventNoteSharpIcon from '@material-ui/icons/EventNoteSharp';
import BallotIcon from '@material-ui/icons/Ballot';
import './HeaderService.css';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#cd283c",
    },
});

export default function HeaderService() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div className="parent10">
            <Link to="/Advertising" id="ll1">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="פרסומות" icon={<BallotIcon fontSize="large" style={{ color: "#312c77" }} />} />
                </BottomNavigation>
            </Link>
            <Link to="/CalendarService" id="ll2">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="לוח שנה" icon={<EventNoteSharpIcon fontSize="large" style={{ color: "#312c77" }} />} />
                </BottomNavigation>
            </Link>
            <Link to="/" id="ll3">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="בית" icon={<HomeSharpIcon fontSize="large" style={{ color: "#312c77" }} />} />
                </BottomNavigation>
            </Link>
        </div>
    )
}
