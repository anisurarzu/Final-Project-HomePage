
import React, { useState } from 'react';


import Navbar from '../../Shared/Navbar/Navbar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import FreeSchedule from '../FreeSchedule/FreeSchedule';
import UserAnswer from './UserAnswer/UserAnswer';







const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
           
            <AppoinmentHeader handleDateChange={handleDateChange}></AppoinmentHeader>
            <FreeSchedule date={selectedDate}></FreeSchedule>
            <UserAnswer></UserAnswer>
            
            
        </div>
    )
}

export default Appoinment;
