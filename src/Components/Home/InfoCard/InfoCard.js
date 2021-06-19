import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

function InfoCard({ info }) {
  return (
    <div className="col-md-4  text-white info-card shadow-sm p-3 mb-5 bg-body rounded">
      <div
        className={`d-flex justify-content-center info-container info-${info.background}`}
      >
        <div className="font-awsome">
          <FontAwesomeIcon
            className="info-icon"
            icon={info.icon}
          ></FontAwesomeIcon>
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
