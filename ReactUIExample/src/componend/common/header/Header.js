import React, { Component } from "react";
import logo from "../../../assets/header.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { navigate } from "@reach/router";
import "../header/header.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "../../../App.css";

const useStyles = makeStyles((theme) => ({
  leftAlign: {
    textAlign: "left",
  },
  centerAlign: {
    textAlign: "center",
  },
}));

export default function Header() {
  //   navigateToHome(){
  //     navigate("/");
  //   }
  const classes = useStyles();
  return (
    // <header role="banner" className={classes.leftAlign}>
    //   <nav className="navbar navbar-expand-lg navbar-light">
    //     <div className="container border-bottom-header">
    //       <div className="pointer">
    //         {/* <a onClick={this.navigateToHome}> */}
    //         <img src={logo} alt="Pay as you go" />
    //         {/* </a> */}
    //       </div>
    //       <div className="btn font-bold">
    //         <h2 className={classes.centerAlign}>New Quote</h2>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <header role="banner">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container border-bottom-header">
          <div className="pointer">
            <img src={logo} alt="Pay as you go" />
          </div>
          <h2 className="font-center-heading">New Quote</h2>
        </div>
      </nav>
    </header>
  );
}
