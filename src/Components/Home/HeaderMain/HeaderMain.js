import React from 'react';
import quranman from "../../../images/quranman.jpg";
import child from "../../../images/child.jpg";
import "./HeaderMain.css";

function HeaderMain() {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1 " >
                <h1>Learn About <br /> Islam</h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, alias quos! Deserunt ipsam nemo quaerat, consectetur voluptatum quidem esse eligendi voluptate saepe dicta inventore unde nostrum, aperiam temporibus tempore molestiae!
                </p>
                <button className="btn btn-primary btn-grad">GET SCHEDULE</button>
            </div>
            <div className="col-md-6">
                <img src={quranman} alt="" className="img-fluid" />
            </div>
        </main>
    )
}

export default HeaderMain
