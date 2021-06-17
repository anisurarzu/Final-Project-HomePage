import React from 'react';
import salat from '../../../images/salat.png';
import ramadan from '../../../images/ramadan.png';
import kaba from '../../../images/kaba.png';
import ServiceDetail from '../ServiceDetail/Servicedetail';

const serviceData=[
    {
        title: 'About Salat',
        img:salat,
        description:''
    },
    {
        title: 'About Ramdan',
        img:ramadan,
        description:''
    },
    {
        title: 'About Hajj',
        img:kaba,
        description:''
    }
    
]

function Services() {
    return (
       <section className='services-container'>
           <div className='text-center'>
                <h2 style={{color:'#17bca5'}}>Important Topics</h2>
           </div>
           <div className="d-flex justify-content-center">
            <div className='w-75 row mt-5'>
            {
               serviceData.map(service => <ServiceDetail service={service}></ServiceDetail> ) 
            }
            </div>
        </div>
       </section>
    )
}

export default Services;
