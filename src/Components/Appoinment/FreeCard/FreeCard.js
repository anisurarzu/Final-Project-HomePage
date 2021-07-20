import React from "react";
import ModalFrom from "../ModalFrom/ModalFrom";
import "./FreeCard.css";
import Button from "@material-ui/core/Button";

function FreeCard({ booking }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className=" mb-5 ">
      <div className="card p-3 shadow-md pl-4  mb-5 bg-body rounded-2xl card-design">
        <div className="card-body text-center ">
          <h5 className="card-title text-brand">{booking.subject}</h5>
        
          <h6 className="font-mono text-sm">{booking.freeTime}</h6>

          <Button
            onClick={openModal}
            className="btn btn-success text-uppercase mt-2"
            variant="contained"
            color="primary"
          >
            Ask Your Question
          </Button>
          <ModalFrom
            modalIsOpen={modalIsOpen}
            appointmentOn={booking.subject}
            closeModal={closeModal}
          ></ModalFrom>
        </div>
      </div>
    </div>
  );
}

export default FreeCard;
