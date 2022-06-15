import React, { Fragment } from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "../../layouts/Footer";

export const NotFound = () => {
  return (
    <Fragment>
    <div>a</div>
      <div>
        <img
          src="/404NotFound.png"
          width={900}
          height={800}
          alt=""
          className="image"
        />
      </div>
    </Fragment>
  );
};
