import React from 'react';
import quranman from "../../../images/quranman.jpg";
import banner from '../../../images/banner.png';
import moon from '../../../images/moon.png';
import './AppoinmenHeader.css'
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';




function AppoinmentHeader(handleDateChange) {
    
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center ">

            <div className="col-md-4 offset-md-1 " >
                
                <img className='img' src={banner} alt="" />
            
            
            </div>
        
            <div className="col-md-6">
                <img className='img-fluid' src={quranman} alt=""  />
            </div>
    </main>
    )
}

export default AppoinmentHeader;
