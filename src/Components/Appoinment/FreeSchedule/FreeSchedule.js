import React from "react";
import FreeCard from "../FreeCard/FreeCard";
const bookingData = [
  {
    _id: "5e8df578e6e8231764dc23df",
    id: 2,
    subject: "Question & Answer",
    freeTime: "10:50 AM - 8:30 AM",
  },
];

function FreeSchedule({ date }) {
  return (
    <section>
      <h4 className="text-center text-brand mb-5">
        Today Is {date.toDateString()}
      </h4>
      <div className="row">
        {bookingData.map((booking) => (
          <FreeCard booking={booking} key={booking.id}></FreeCard>
        ))}
      </div>
    </section>
  );
}

export default FreeSchedule;
