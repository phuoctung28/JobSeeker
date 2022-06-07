import React from "react";
import Button from "../../Button";
import classes from "./JobCard.module.scss";
export const JobCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.information}>
      <img src='/google.svg' alt="My Happy SVG"/>
        <h4>Product Designer</h4>
        <p>Google, San Francisco</p>
        <div className={classes.type}>
          <b>Format: </b>
          <div >Full-time</div>
        </div>
      </div>
      <div className={classes.apply}>
      <Button >
        Apply Job
      </Button>
      <img src="../../../assets/timer.png" alt="" />
      </div>
    </div>
  );
};
