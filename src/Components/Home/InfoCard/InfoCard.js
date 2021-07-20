import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function InfoCard({ info }) {
   useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);
  return (
    <div data-aos="fade-right" className=" sm:shadow-lg sm:space-y-6 bg-gradient-to-r from-gray-400 hover:bg-gray-400 rounded-lg max-h-60 col-md-4   text-white   ">
      <div
        className=' ml-24 p-2   '
      >
        <div className="font-awsome">
          <FontAwesomeIcon
            className="info-icon ml-6"
            icon={info.icon}
          ></FontAwesomeIcon>
        </div>
        <div>
          <h6 className='font-md md:font-sans'>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
