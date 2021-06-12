import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';




const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root')
    function ModalFrom( {modalIsOpen,closeModal,appointmentOn}) {
        const { register, handleSubmit,  formState: { errors } } =  useForm();
        const onSubmit = data => {
            data.service=appointmentOn;
            //data.created=new Date();
          
          fetch('http://localhost:5000/addQuestion',{
              method:'POST',
              headers:{'content-type':'application/json'},
              body: JSON.stringify(data) 
          })
          .then(res =>res.json())
          .then(success =>{
              if(success){
                closeModal();
                alert('Your Question Send Successfully');
              }
          })

          
        };

       
  
    return (
        <div>
            
            
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <h2 className="text-center text-brand">{appointmentOn}</h2>
          <form className="p-5"  onSubmit={handleSubmit(onSubmit)} method='POST'>
              <input type="text" ref={register({ required: true })} placeholder='Your Name' class="form-control" name='name' required />
              <br />
              <input type="text" ref={register({ required: true })} placeholder='Email' class="form-control" name='email'  required />
              <br />
              <textarea class="form-control" ref={register({ required: true })} placeholder='Write Your Question Here' rows="3" name='question' required></textarea>
              <br />
    
              <select class="form-select" aria-label="Default select example" name='gender' ref={register({ required: true })}>
                 
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="female">Other</option>
                  
                  
              </select>
              <br />
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          
        </Modal>
          
        </div>
    )
}

export default ModalFrom;
