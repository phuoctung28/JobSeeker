import React, { Fragment } from "react";
import classes from "./Profile.module.css";
import { Header } from "../../layouts/Header";

export const Profile = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <Header id="homepage" />
      </div>
    </Fragment>
  );
};
