import React from 'react'
import CustomBtn from './CustomBtn'
import siteLogo from '../site_logo.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
 
const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        display: "flex",
        // justifyItems: "space-between",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        ['@media screen and (max-width: 780px']: {
            flexDirection: "column"
        }
    },
    logo: {
        width: "1rem !important",
        height: "1rem !important",
        ['@media screen and (max-width:780px'] : {
            display: "none"
        }
    },
    logoMobile: {
        width: ".5rem !important",
        height: ".5rem !important",
        display:"none",
        ['@media screen and (max-width: 780px)'] : {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8",
            cursor: "pointer",
        },
        ['@media screen and (max-width: 780px)'] : {
            paddingBottom: "1rem"
        }
    }
});

function NavBar() {
    const classes = styles();
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <img width="100" height="50" src={siteLogo} className={classes.logo} />
            {/* <img width="70" height="30" src={siteLogo} className={classes.logoMobile} /> */}
            <Typography variant="h6" className={classes.menuItem}>
                About
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Blog
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Careers
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Demos
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Contact Us
            </Typography>
            <CustomBtn txt="Try Our Product" />
        </Toolbar>
    );
}

export default NavBar
