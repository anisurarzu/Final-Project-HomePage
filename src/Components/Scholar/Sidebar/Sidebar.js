import React from "react";

import logo from "../../../images/logo.png";
import "./sidebar.css";

const containerStyle = {
  backgroundColor: "white",

  height: "100%",
};
function Sidebar() {
  return (
    <div style={containerStyle}>
      <p className="sidebar-title shadow-sm p-3 mb-5 bg-body rounded">
        Scholar House
      </p>
      <img className="logo shadow p-3 mb-5 bg-body rounded" src={logo} alt="" />
    </div>
  );
}

export default Sidebar;
