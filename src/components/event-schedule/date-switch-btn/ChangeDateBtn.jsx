import { useState } from "react";
import "./ChangeDateBtn.scss";

function ChangeDateBtn(props, { onDateChange }) {
  console.log(props);
  const keys = Object.keys(props.dayData);
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

  function handleChange(e) {
    props.onDateChange(props.dayData);
  }

  return (
    <li className={`list-item ${props.active ? "active" : ""}`}>
      <button className="list-item__button" onClick={handleChange}>
        <h3>{props.buttonTitle}</h3>
        <span>
          {props.dayData.date.day} {}
          {monthNames[props.dayData.date.month]} {}
          {props.dayData.date.year}
        </span>
      </button>
    </li>
  );
}

export default ChangeDateBtn;
