import React from 'react'
import HeaderMain from '../HeaderMain/HeaderMain'
import Information from '../Information/Information'

import Navbar from '../Navbar/Navbar'
import './Header.css'

function Header() {
    return (
        <div className=''>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Information></Information>
        </div>
    )
}

export default Header;
