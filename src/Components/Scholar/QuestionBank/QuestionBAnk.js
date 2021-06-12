import React from 'react'
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import SubmitAnswer from '../SubmitAnswer/SubmitAnswer';
import './QuestionBank.css'


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

function QuestionBank({question}) {
    
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    const { register, handleSubmit,  formState: { errors } } =  useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/sendAnswer',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(data) 
        })
        .then(res =>res.json())
        .then(success =>{
            if(success){
              closeModal();
              alert('Your Answer Send Successfully');
            }
        })
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
                <div>
                <h2>All Question</h2>
                
                </div>
                <div className=''>
                   
                    {
                        question.map(qd=> 
                           <div className=' user-answer-box shadow p-3 mb-5 bg-body rounded' >
                               

                               <p className='user-para'>
                                <p>{qd.question}</p>
                           
               
                           <button class="btn btn-info"  onClick={openModal}>Submit Answer</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Submit Answer</h2>

            <h5 id="demo"></h5>
          <form  onSubmit={handleSubmit(onSubmit)}>
           
          <input  ref={register({ required: true })} type="text" class="form-control" placeholder='Your Name' name='name' /> <br />
          <textarea  ref={register({ required: true })} class="form-control" placeholder='Copy The Question Here' name='question'></textarea>
           <br />
           
           <textarea  ref={register({ required: true })} class="form-control" placeholder='Write Your Answer Here' name='answer'></textarea>
           <br />
           <button class="btn btn-success" type='submit'>Send</button>
         </form> <br />
        
         
        </Modal>

                           

        </p>
                            </div>
                        )
                    }
                   
                </div>

                
                
            </div>
            

       
    )
}

export default QuestionBank;
