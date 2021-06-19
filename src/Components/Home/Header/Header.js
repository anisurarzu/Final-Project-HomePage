import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import HeaderMain from "../HeaderMain/HeaderMain";

import Information from "../Information/Information";

import "./Header.css";

function Header() {
  return (
    <div className="">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <Information></Information>
    </div>
  );
}

export default Header;
