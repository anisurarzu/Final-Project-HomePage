import React from "react";
import NewFooter from "../../Shared/NewFoter/NewFooter";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";

import Services from "../Services/Services";
import Style from "../Style/Style";
import History from "./History/History";
import './Home.css';

function Home() {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <History></History>
      <Style></Style>
      <Footer></Footer>
      
      <NewFooter></NewFooter>
    </div>
  );
}

export default Home;
