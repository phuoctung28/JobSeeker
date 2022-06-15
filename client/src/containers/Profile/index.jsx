import React, { Fragment } from "react";
import classes from "./Profile.module.css";
import { Header } from "../../layouts/Header";
import { Banner } from "../../components/Banner";

export const Profile = () => {
  return (
    <Fragment>
      <Header id="homepage" />
      <div className={classes.header}></div>
      <Banner></Banner>
    </Fragment>
  );
};
