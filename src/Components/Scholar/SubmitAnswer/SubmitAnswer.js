import React from 'react'
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { queryByDisplayValue } from '@testing-library/dom';
import QuestionBank from '../QuestionBank/QuestionBAnk';

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

function SubmitAnswer() {

    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    const { register, handleSubmit,  formState: { errors } } =  useForm();
    const onSubmit = data => {
        console.log(data);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div>
            
            <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Submit Answer</h2>
          

          <form  onSubmit={handleSubmit(onSubmit)}>
           
           
           <small>{}</small>
           
           <textarea  ref={register({ required: true })} class="form-control" placeholder='Write Your Answer Here' name='answer'></textarea>
           <br />
           <button class="btn btn-success" type='submit'>Send</button>
         </form> <br />
        
         
        </Modal>


        </div>
    )
}

export default SubmitAnswer
