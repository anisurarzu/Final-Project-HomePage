import React from 'react';
import quranman from "../../../images/quranman.jpg";
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';




function AppoinmentHeader(handleDateChange) {
    
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1 " >
                <h1>Send Your Question</h1>
                
            
            
                <form action="#">
                        
                    <input type="text" placeholder='name' />   
                    <br />
                    <input type="text-area" placeholder='write your question' />
                    <br />
                    <button className="btn btn-success">Submit</button> 
                        
                </form>
                </div>
        
            <div className="col-md-6">
                <img src={quranman} alt="" className="img-fluid" />
            </div>
    </main>
    )
}

export default AppoinmentHeader;
