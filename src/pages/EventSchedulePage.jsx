import React, { useEffect } from "react";
import Schedule from "../components/event-schedule/Schedule";
import { faker } from "@faker-js/faker";

function EventSchedulePage() {
  const conferenceData = {
    startDate: faker.date.anytime(),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <React.Fragment>
      <Schedule startDate={conferenceData.startDate}></Schedule>
    </React.Fragment>
  );
}
export default EventSchedulePage;
