import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ServiceDetail({ service }) {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);
  return (
    <div data-aos="fade-left" className="col-md-4 text-center md:shadow-md sm:shadow-md md:rounded-3xl sm:rounded-3xl sm:p-8 md:p-8 sm:max-w-7xl ">
      <img
        className="mt-2 sm:pl-20 md:pl-24"
        style={{ height: "50px" }}
        src={service.img}
        alt=""
      />
      <h4 className="mt-3 mb-3 text-lg font-semibold font-mono">{service.title}</h4>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit soluta
        cupiditate ipsum aperiam, inventore quam dolore error officia nihil
        fugit vel laudantium voluptatum perspiciatis ducimus nemo, consequatur
        saepe nesciunt ea.{" "}
      </p>
    </div>
  );
}

export default ServiceDetail;
