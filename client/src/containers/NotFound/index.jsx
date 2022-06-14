import React, { Fragment } from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const NotFound = () => {
  return (
    <Fragment>
      {/* <div className={classes.header}>
        <Header></Header>
      </div> */}

      <img
        src="/404NotFound.png"
        width={900}
        height={800}
        alt=""
        className="image img-fluid"
      />

      <img src="/svg.png" alt="" className="wave img-fluid" />
    </Fragment>
  );
};
