import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocalSeeIcon from '@material-ui/icons/LocalSee';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import EventNoteSharpIcon from '@material-ui/icons/EventNoteSharp';
import CategorySharpIcon from '@material-ui/icons/CategorySharp';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import './Header.css';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#cd283c",
    },
});

export default function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div className="parent">

            <Link to="/shoppinglist" id="l1">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="רשימת קניות" icon={<ShoppingCartSharpIcon fontSize="large" style={{ color: "#312c77" }} />} />
                </BottomNavigation>
            </Link>
            <Link to="/invite" id="l2">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="מוזמנים" icon={<ContactPhoneRoundedIcon fontSize="large" style={{ color: "#312c77" }} />} />
                </BottomNavigation>
            </Link>
            <Link to="/events" id="l3">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="ארועים" icon={<LocalSeeIcon fontSize="large" style={{ color: "#312c77" }} />} />
                </BottomNavigation>
            </Link>
            <Link to="/calendar" id="l4">
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
            <Link to="/categories" id="l5">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="קטגוריות" icon={<CategorySharpIcon fontSize="large" style={{ color: "#312c77" }} />} />
                </BottomNavigation>
            </Link>
            <Link to="/" id="l6">
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
