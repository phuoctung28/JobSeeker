import React from "react";
import classes from "./index.module.css";

export const AboutMe = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.aboutContent}>
          <div className={classes.aboutmetxtSection}>
            <div className={classes.heading}>About me</div>
            <button className={classes.infoBtn}>i</button>
          </div>
          <div className={classes.insertBtn}>
            <button>click me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
