import React from 'react';
import "./Navbar.css";


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item">
                <a class="nav-link spaceNav   active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link spaceNav  " href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link spaceNav  " href="#">SendQuestion</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link  spaceNav " href="/appoinment">GetScheduled</a>
              </li>
              <li class="nav-item">
                <a class="nav-link spaceNav  " href="#">LogIn</a>
              </li>
            
             
            </ul>
           
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
