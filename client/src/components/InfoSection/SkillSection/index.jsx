import React from "react";
import classes from "./index.module.css";
export const SkillSection = () => {
  return (
    <div>
      <div className={classes.skillContainer}>
        <div className={classes.content}>
          <div className={classes.skillTxt}>
            <div className={classes.title}>Skill</div>
            <button className={classes.infobtn}>Info</button>
          </div>
          <div>
            <button>click</button>
          </div>
        </div>
        <div className={classes.moreInfo}>
          <div className={classes.moreInfoWrapper}>
            <div className={classes.moreInfocontent}>
              <p>Increase your chances to get noticed by recruiters</p>
              <p>
                Recruiters search using skills as keywords and can filter out
                candidates whose skills aren't validated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
