import React from "react";

import banner from "../../../images/banner.png";
import children from "../../../images/children.png";
import "./AppoinmenHeader.css";
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';

function AppoinmentHeader(handleDateChange) {
  return (
    <main
      style={{ height: "500px" }}
      className="row d-flex align-items-center "
    >
      <div className="col-md-4 offset-md-1 ">
        <img className="img" src={banner} alt="" />
      </div>

      <div className="col-md-6">
        <img className="children" src={children} alt="" />
      </div>
    </main>
  );
}

export default AppoinmentHeader;
