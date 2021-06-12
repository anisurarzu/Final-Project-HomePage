import React from 'react';
import FreeCard from '../FreeCard/FreeCard';
const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Mukhter Ahmed',
        freeTime: '8:00 AM - 9:00 AM',
        
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Dr. ABM Zakaria',
        freeTime: '10:50 AM - 11:30 AM',
        
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Dr.Manjur E Elahi',
        freeTime: '5:00 PM - 6:00 PM',
        
    },
    
]

function FreeSchedule({date}) {
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Our Wise Scholars </h2>
            <h4  className="text-center text-brand mb-5">Date:{date.toDateString()}</h4>
            <div className="row">
                {
                    bookingData.map(booking => <FreeCard booking={booking} key= {booking.id}></FreeCard>)
                }
            </div>
        </section>
    )
}

export default FreeSchedule;
