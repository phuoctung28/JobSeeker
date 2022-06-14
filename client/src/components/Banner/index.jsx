import React from "react";
import classes from "./index.module.css";

export const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        {" "}
        <div className={classes.content}>
          <button className={classes.editBtn}>
            {/* <FontAwesomeIcon icon={"coffee"}></FontAwesomeIcon> */}
            <i className="fa-solid fa-pen"></i>
          </button>
          <div className={classes.mainContent}>
            <div className={classes.imgContainer}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png"
                alt="avatar"
                className={classes.ava}
              ></img>
            </div>
            <div className={classes.mainInfo}>
              <div className={classes.info}>
                <div className={classes.name}>Dang Quoc Tuan</div>
                <div className={classes.location}>
                  Ho Chi minh City, Viet Nam
                </div>
                <div className={classes.personalInfo}>
                  <div className={classes.mail}>
                    <a
                      href="mailto:dangquoctuanqt@gmail.com"
                      className={classes.linkMail}
                    >
                      dangquoctuanqt@gmail.com
                    </a>
                  </div>
                  <div className={classes.phone}>0827270265</div>
                </div>
              </div>
              <div className={classes.Share_Export_btn}>
                <div className={classes.emptyBox}></div>
                <div className={classes.btnHolder}>
                  <button className={classes.shareBtn}>Share</button>
                  <button className={classes.exportBtn}>Export to PDF</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
