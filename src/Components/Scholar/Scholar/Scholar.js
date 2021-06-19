import React, { useState, useEffect } from "react";

import QuestionBank from "../QuestionBank/QuestionBAnk";
import Sidebar from "../Sidebar/Sidebar";

import "react-calendar/dist/Calendar.css";

import "./Scholar.css";

function Scholar() {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allQuestion")
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, []);
  //console.log(setQuestion)

  return (
    <section>
      <div className="container-fluid row scholar">
        <div className="col-md-2 sidebar">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-10">
          <QuestionBank question={question}></QuestionBank>
        </div>
      </div>
    </section>
  );
}

export default Scholar;
