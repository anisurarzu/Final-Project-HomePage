import React from "react";
import quranman from "../../../images/quranman.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./HeaderMain.css";
import { useHistory } from "react-router";

function HeaderMain() {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/getschedule");
  };

  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);
  return (
    <main
      style={{ height: "600px" }}
      className="row d-flex align-items-center "
    >
      <div data-aos="zoom-in" className="col-md-4 offset-md-1 ">
        <h1 id="htag" className='text-5xl font-mono mb-7 '>
          Learn <span className='animate-pulse ... '>About </span> <br /> Islam
        </h1>
        <p className="">
          আপনি যদি কোন বিশেষজ্ঞ আলেমগণ এর শিডিউল নিতে চান কোন ইসলামিক সেমিনার
          কিংবা দ্বিনী কাজের সহায়তার জন্য তবে নিচের বাটনটিতে ক্লিক করে প্রয়োজনীয়
          তথ্যাদি দিয়ে আমাদেরকে সহোযোগিতা করুন
        </p>
        <button onClick={handleLogin} className="btn btn-primary btn-grad">
          GET SCHEDULE
        </button>
      </div>
      <div  className="col-md-6">
        <img src={quranman} alt="" className="img-fluid " />
      </div>
    </main>
  );
}

export default HeaderMain;
