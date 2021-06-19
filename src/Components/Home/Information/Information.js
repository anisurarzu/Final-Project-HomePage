import React from "react";
import InfoCard from "../InfoCard/InfoCard";

import { faClock, faQuran, faPhone } from "@fortawesome/free-solid-svg-icons";
const InfoData = [
  {
    title: "Read Books",
    description: "Quran & Hadith",
    icon: faQuran,
    background: "primary",
  },
  {
    title: "Prayer Time",
    description: "prayer Time",
    icon: faClock,
    background: "dark",
  },
  {
    title: "Contact Us",
    description: "01789879345",
    icon: faPhone,
    background: "primary",
  },
];

function Information() {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {InfoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
}

export default Information;
