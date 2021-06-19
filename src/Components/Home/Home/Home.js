import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";

import Services from "../Services/Services";
import History from "./History/History";

function Home() {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <History></History>
      <Footer></Footer>
    </div>
  );
}

export default Home;
