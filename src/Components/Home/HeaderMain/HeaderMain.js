import React from 'react';
import quranman from "../../../images/quranman.jpg";
import child from "../../../images/child.jpg";
import "./HeaderMain.css";
import { useHistory } from 'react-router';

function HeaderMain() {
    const history =useHistory()
    const handleLogin=()=>{
        history.push('/getschedule');
    }



    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1 " >
                <h1 id='htag'>Learn About <br /> Islam</h1>
                <p className="text-secondary">
                 আপনি যদি কোন বিশেষজ্ঞ আলেমগণ এর শিডিউল নিতে চান কোন ইসলামিক সেমিনার কিংবা দ্বিনী কাজের সহায়তার জন্য তবে নিচের বাটনটিতে ক্লিক করে প্রয়োজনীয় তথ্যাদি দিয়ে আমাদেরকে সহোযোগিতা করুন
                </p>
                <button onClick={handleLogin} className="btn btn-primary btn-grad">GET SCHEDULE</button>
            </div>
            <div className="col-md-6">
                <img src={quranman} alt="" className="img-fluid" />
            </div>
        </main>
    )
}

export default HeaderMain;
