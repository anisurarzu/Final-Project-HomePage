import React from 'react'

import Header from '../Header/Header'
import ScholarList from '../ScholarList/ScholarList'


import Services from '../Services/Services'




function Home() {
    return (
        <div>
            
            <Header></Header>
            <Services></Services>
            <h2 style={{textAlign:'center'}}>Scholar List</h2>
          
            <ScholarList></ScholarList>
            
            
            
            
      

        </div>
    )
}

export default Home;
