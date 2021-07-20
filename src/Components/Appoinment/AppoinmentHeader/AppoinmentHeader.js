import React from "react";

import salam from "../../../images/salam.gif";
import children from "../../../images/children.png";
import "./AppoinmenHeader.css";
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';

function AppoinmentHeader(handleDateChange) {
  return (
    <main
      style={{ height: "450px" }}
      className="row d-flex align-items-center "
    >
      <div className="col-md-4 offset-md-1 d-flex align-items-center  ">
        <div>
          <img className="img mt-12" src={salam} alt="" />
        </div>
        <div className="mb-12 shadow-md para-card rounded-lg bg-gradient-to-r from-gray-50  ...">
          <p className="p-8 text-gray-700 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none ...">
          ``জ্ঞানীদের জিজ্ঞাসা কর,যদি তোমরা  না জানো``
          </p>
          <small className='p-8 mb-12 text-gray-400 '>[আল-কোরানঃ অধ্যায় ১৬,আয়াত ৪৩]</small>
        </div>
      </div>

      <div className="col-md-6">
        <img className="children" src={children} alt="" />
      </div>
    </main>
  );
}

export default AppoinmentHeader;
