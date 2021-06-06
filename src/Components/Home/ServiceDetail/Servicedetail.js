import React from 'react'

function ServiceDetail({service}) {
    return (
        <div className='col-md-4 text-center'>
            <img className='mt-3' style={{height:'50px'}} src={service.img} alt="" />
            <h4 className='mt-3 mb-3'>{service.title}</h4>
            <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus laborum error animi cumque amet velit, ab voluptatibus blanditiis laboriosam odit! Deleniti labore minima eaque magni. Quia laborum iste nemo eos!</p>
        </div>
    )
}

export default ServiceDetail;
