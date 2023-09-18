import styles from "./Schedule.module.scss";
import { faker } from "@faker-js/faker";
import ChangeDateBtn from "./date-switch-btn/ChangeDateBtn";
import React, { useEffect } from "react";
import { useState } from "react";
import EventCard from "./event-card/EventCard";
import fetchData from "../../utilityFunction";
import { ThreeCircles } from "react-loader-spinner";

function Schedule(props) {
  const [scheduleData, setScheduleData] = useState({});
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [scheduleState, setScheduleState] = useState("");

  useEffect(() => {
    (async () => {
      let fetchedData = await fetchData(`{
        eventsmodel {
          scheduledata
        }
      }`);
      setScheduleData(fetchedData.eventsmodel.scheduledata);
      setScheduleState(fetchedData.eventsmodel.scheduledata["day 1"]);
      setIsContentLoaded(true);
    })();
  }, []);

  //defining the initial selected day of events

  /*
  function : eventDayChangeHandler
  description : changes state object of events from child component
  parameters : an object of available events on a specic selected day
  returns : null
  */
  function eventDayChangeHandler(dayEvents) {
    setScheduleState(dayEvents);
  }

  /*
  function : setActive
  description : sets active class to the selected day button
  parameters : event object
  returns : null
  */
  function setActive(e) {
    const listItems = document.querySelectorAll(".list-item");
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("active");
    }

    if (e.target.parentNode.parentNode.classList.contains("list-item")) {
      e.target.parentNode.parentNode.classList.add("active");
    } else if (e.target.parentNode.classList.contains(".list-item")) {
      e.target.parentNode.classList.add("active");
    }
  }

  return (
    <React.Fragment>
      {isContentLoaded ? (
        <>
          {console.log(setScheduleState)}
          <div className={styles["schedule-heading-wrapper"]}>
            <h3 className={styles["schedule-heading-wrapper__heading"]}>
              <small>react</small> Conference 2023
            </h3>
            <h2
              className={styles["schedule-heading-wrapper__heading-schedule"]}
            >
              schedule
            </h2>
          </div>
          <div className={styles["schedule"]}>
            <nav className={styles["schedule__nav"]}>
              <ul
                className={styles["schedule__nav__dates"]}
                onClick={setActive}
              >
                {/* adding all the days in form of buttons */}

                {Object.keys(scheduleData).map((day, index) => {
                  const isActive = index === 0;

                  return (
                    <ChangeDateBtn
                      key={index}
                      buttonTitle={day}
                      onDateChange={eventDayChangeHandler}
                      dayData={scheduleData[day]}
                      active={isActive} // Pass the isActive flag to the component
                    />
                  );
                })}
              </ul>
            </nav>
            <ul className={styles["schedule__cards"]}>
              {/* adding all the events from the selected day */}

              {scheduleState.topics.map((event, index) => {
                return <EventCard key={index} eventCard={event} />;
              })}
            </ul>
          </div>
        </>
      ) : (
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass="loader-animation"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#00fff7"
          innerCircleColor="#fff"
          middleCircleColor="#7b7b7b"
        />
      )}
    </React.Fragment>
  );
}

export default Schedule;
