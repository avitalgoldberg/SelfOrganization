import React, { Component } from 'react'
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
//import Header from './Header.css';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fcb9da",
        showLabels: true,
    },
});

export default function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div className={classes.root}>
            {/* <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            ></BottomNavigation> */}
            <Link to="/shoppinglist"><BottomNavigationAction label="רשימת קניות" icon={<ShoppingCartSharpIcon fontSize="large" color="secondary" />} /></Link> |
            <Link to="/invite"><BottomNavigationAction label="מוזמנים" icon={<ContactPhoneRoundedIcon fontSize="large" color="secondary" />} /></Link> |
            <Link to="/events"><BottomNavigationAction label="ארועים" icon={<LocalSeeIcon fontSize="large" color="secondary" />} /></Link> |
            <Link to="/calendar"><BottomNavigationAction label="לוח שנה" icon={<EventNoteSharpIcon fontSize="large" color="secondary" />} /></Link> |
            <Link to="/categories"><BottomNavigationAction label="קטגוריות" icon={<CategorySharpIcon fontSize="large" color="secondary" />} /></Link> |
            <Link to="/"><BottomNavigationAction label="בית" icon={<HomeSharpIcon fontSize="large" color="secondary" />} /></Link>


        </div>
    )
}
