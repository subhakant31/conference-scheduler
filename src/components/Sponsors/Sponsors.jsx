import styles from "./Sponsors.module.scss";
import React from "react";
import saucelabs from "../../assets/images/saucelabs.webp";
import buf from "../../assets/images/buf.svg";
import vue from "../../assets/images/vuemastery.webp";
import google from "../../assets/images/google.png";
import gold from "../../assets/images/gold.jpeg";
import twilio from "../../assets/images/twilio.webp";
import superblocks from "../../assets/images/logo_vertical.avif";
import ibm from "../../assets/images/ibm.png";
import bryntum from "../../assets/images/RGB_Bryntum_Logo.svg";
import kadena from "../../assets/images/kedena.png";

function Sponsors() {
  return (
    <React.Fragment>
      <div className={styles["sponsors"]}>
        <div className={styles["sponsors-head"]}>
          <span className={styles["sponsors-head__spanone"]}>last </span>
          <span className={styles["sponsors-head__spanone-spantwo"]}>
            year sponsors
          </span>
        </div>

        <div className={styles["sponsors-brands"]}>
          <a href='#home'>
            <img src={saucelabs} alt='saucelabs' />
          </a>
          <a href='#home'>
            <img src={buf} alt='buf' />
          </a>
          <a href='#home'>
            <img src={vue} alt='vue' />
          </a>
          <a href='#home'>
            <img src={google} alt='google' />
          </a>
          <a href='#home'>
            <img src={gold} alt='gold' />
          </a>
          <a href='#home'>
            <img src={twilio} alt='twilio' />
          </a>
          <a href='#home'>
            <img src={superblocks} alt='superblocks' />
          </a>
          <a href='#home'>
            <img src={ibm} alt='ibm' />
          </a>
          <a href='#home'>
            <img src={bryntum} alt='bryntum' />
          </a>
          <a href='#home'>
            <img src={kadena} alt='kadena' />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Sponsors;
