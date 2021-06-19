import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { UserContext } from "../../../App";
import logo from "../../../images/logo.png";

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img className="logo-design" src={logo} alt="" />

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
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
    </nav>
  );
}

export default Navbar;
