import React from 'react';
import "./Navbar.css";


function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item">
                <a class="nav-link spaceNav   active" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link spaceNav  " href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link spaceNav  " href="#">GetSchedule</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link  spaceNav " href="/sendquestion">SendQuestion</a>
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
