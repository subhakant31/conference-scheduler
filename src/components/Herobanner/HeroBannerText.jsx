import React from "react";
import styles from "./HeroBannerText.module.scss";
function HeroBannerText(props) {
  const superScript = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
    5: "th",
    6: "th",
    7: "th",
    8: "th",
    9: "th",
    0: "th",
  };
  const monthNames = [
    "January",

    "February",

    "March",

    "April",

    "May",

    "June",

    "July",

    "August",

    "September",

    "October",

    "November",

    "December",
  ];
  function DateSupercriptGenerator(numberString) {
    let lastDigit = Math.floor(numberString % 10);
    for (const key in superScript) {
      if (key === lastDigit) {
        return superScript[key];
      }
    }
  }
  return (
    <React.Fragment>
      <div className={styles["hero-banner"]}>
        <div className={styles["overlay"]}></div>
        <div className={styles["hero-text"]}>
          <div className={styles["hero-text__title"]}>
            <h1 className={styles["hero-text__title-head"]}>
              {props.heroBannerTitle}
            </h1>
            <h2 className={styles["hero-text__title-sub-head"]}>
              {props.heroBannerCaption}
            </h2>
          </div>

          <div className={styles["event-detail"]}>
            <div className={styles["event-detail__info"]}>
              <div>
                <h5>when</h5>
                <span>
                  {props.startDate.getDay().toString()}
                  {}
                  <sup>
                    {DateSupercriptGenerator(
                      props.startDate.getDay().toString()
                    )}
                  </sup>{" "}
                  {}
                  {monthNames[props.startDate.getMonth()]} {}
                  {props.startDate.getFullYear()}
                </span>
              </div>
              <div>
                <h5>where</h5>
                <span>{props.eventLocation} </span>
              </div>
            </div>
            <div className={styles["event-detail__info"]}>
              <div>
                <h5>who</h5>
                <span>{props.presentors}</span>
              </div>
              <div>
                <h5>what time</h5>
                <span>9 am - 7 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroBannerText;
