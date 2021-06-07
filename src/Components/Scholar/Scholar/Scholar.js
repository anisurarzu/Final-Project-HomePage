import React, { useState } from 'react'

import QuestionBank from '../QuestionBank/QuestionBAnk'
import Sidebar from '../Sidebar/Sidebar'

import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';


const containerStyle = {
   
    backgroundColor: "#F4FDFB",
    
    height:'100%'
}

function Scholar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [question,setQuestion]=useState([])
    const handleDateChange = date => {
        setSelectedDate(date);

        fetch('http://localhost:5000/questionBank',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({date})
        })
        .then(res=>res.json())
        .then(data => setQuestion(data))
    }
    
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                        />
                </div>
                <div className="col-md-5">
                    <QuestionBank question={question}></QuestionBank>
                </div>
            </div>
        </section>
    )
}

export default Scholar;
