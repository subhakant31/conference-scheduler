import React from "react";
import classes from "./Buttton.module.scss";
import { Link } from "react-router-dom";
function Button() {
  return (
    <React.Fragment>
      <div className={classes["button-wrapper"]}>
        <a href="#" className={classes.button}>
          buy ticket
        </a>
        <Link to="/location-info" className={classes.button}>
          location
        </Link>
        <Link to="/food-info" className={classes.button}>
          food info
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Button;
