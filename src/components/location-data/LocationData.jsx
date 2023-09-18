import React from "react";
import { useState, useEffect } from "react";
import styles from "../location-data/LocationData.module.scss";

function LocationData(props) {
  return (
    <React.Fragment>
      <div className={styles["location-container__data"]}>
        <div className={styles["location-container__data__details"]}>
          <h3>
            <span>{props.where} </span>location
          </h3>
          <ul>
            <li>
              <span>Country </span>
              {props.country}
            </li>
            <li>
              <span>website</span>
              <a href={props.website}>click here for more info</a>
            </li>
            <li>
              <span>State </span>
              {props.state}
            </li>
            <li>
              <span>City </span>
              {props.city}
            </li>
            <li>
              <span>Address </span>
              {props.address}
            </li>
            <li>
              <span>Building NO </span>
              {props.buildingNo}
            </li>
            <li>
              <span>Direction to Event </span>
              {props.direction}
            </li>
          </ul>
        </div>
        <div className={styles["location-container__data__map"]}>
          <iframe src={props.map}></iframe>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LocationData;
