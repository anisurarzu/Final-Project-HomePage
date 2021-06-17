import React from 'react'

function ServiceDetail({service}) {
    return (
        <div className='col-md-4 text-center'>
            <img className='mt-3' style={{height:'50px'}} src={service.img} alt="" />
            <h4 className='mt-3 mb-3'>{service.title}</h4>
            <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit soluta cupiditate ipsum aperiam, inventore quam dolore error officia nihil fugit vel laudantium voluptatum perspiciatis ducimus nemo, consequatur saepe nesciunt ea. </p>
        </div>
    )
}

export default ServiceDetail;
