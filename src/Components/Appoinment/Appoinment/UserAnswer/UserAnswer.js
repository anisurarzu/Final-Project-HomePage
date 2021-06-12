import React, { useState,useEffect } from 'react'
import ModalFrom from '../../ModalFrom/ModalFrom'
import './UserAnswer.css'

function UserAnswer() {
    const [answer,setAnswer]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/sendAnswer',)
        
        .then(res => res.json())
        .then(data =>setAnswer(data))
    },[])
    
    return (
        <div>
            <h1 className='htag'>All Answer</h1>
            
            {
                
                 answer.map(sa => 
                    
                    <div class="  shadow p-3 mb-5 bg-body rounded answer-box">
                        <p className='para'>
                        <h3 className='title'> Question: {sa.question}</h3> <br />
                         <h5> <span>Answer:</span>  {sa.answer}</h5>
                         <small>Anserd By: {sa.name}</small>
                         </p>
                    </div>
                    
                    )
                    
                
            }
        </div>
    )
}

export default UserAnswer
