import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";

import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { UserContext } from "../../../App";
import logo from "../../../images/logo.png";
// import { useState } from "react";



function Navbar() {


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed w-full bg-light shadow-sm ...">
      <img className="logo-design md:h-full  " src={logo} alt="" />

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="spaceNav nav-link mr-5" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="spaceNav nav-link mr-5" to="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="spaceNav nav-link mr-5" to="/getschedule">
              GetSchedule
            </Link>
          </li>
          <li className="nav-item">
            <Link className="spaceNav nav-link mr-5 " to="/sendQuestion">
              Send Question
            </Link>
          </li>

          <li className="nav-item">
            <Button
              onClick={() => {
                setLoggedInUser({});
              }}
              variant="contained"
            >
              Log out
            </Button>
             
           
          </li>

        </ul>
      </div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <small className='p-2'>{loggedInUser.email}</small>
        <img className='w-8 mr-2 rounded-full' src={loggedInUser.photo} alt="" />
      </UserContext.Provider>
    </nav>
  );
}

export default Navbar;
