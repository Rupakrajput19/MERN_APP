import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import LoginIcon from "@mui/icons-material/Login";
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Spraxa_logo from "../../Images/Spraxa_logo.jpg";
import { Link } from "react-router-dom";
// import useStyle from "./style";

const Header = () => {
  // const classes = useStyle();
  return (
    <>
      <AppBar position="sticky" color="primary" className="header">
        <Toolbar id="header_toolbar">
          <div className="left_header">
          <img
            src={Spraxa_logo}
            alt="spraxa_logo"
            // className={classes.style_img}
            id="style_img"
          />
          <Typography variant="h4" id="spraxa">
            Spraxa
          </Typography>
          </div>
          <div className="right_header">
          <Button
            variant="inherit"
            // className={classes.btn_style}
            id="btn_style1"
          >
            <Link to="/Home" className="page_link">Home</Link>
          </Button>
          <Button
            variant="inherit"
            // className={classes.btn_style}
            id="btn_style2"
          >
            <Link to="/Contact" className="page_link">Contact</Link>
          </Button>
          <Button
            variant="inherit"
            // className={classes.btn_style}
            id="btn_style3"
          >
            <Link to="/About" className="page_link">About</Link>
          </Button>
          <Button
            variant="inherit"
            // className={classes.btn_style}
            id="btn_style4"
          >
            <Link to="/login" className="page_link">Logout</Link>
          </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
