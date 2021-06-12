import React from 'react'
import ModalFrom from '../ModalFrom/ModalFrom'

function FreeCard({booking}) {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
    setIsOpen(true);
    }

  
    function closeModal(){
    setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5 ">
        <div className="card p-3 shadow-sm p-3 mb-5 bg-body rounded" >
            <div className="card-body text-center">
                <h5 className="card-title text-brand">{booking.subject}</h5>
                
                <h6>{booking.freeTime}</h6>
                <button onClick={openModal}  className="btn btn-success text-uppercase">Ask Your Question</button>
               <ModalFrom modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} ></ModalFrom>
            </div>
        </div>
    </div>
    )
}

export default FreeCard
