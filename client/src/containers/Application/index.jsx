import React, { Fragment } from "react";
import { ApplicationCard } from "../../components/Card/Application";
import { Header } from "../../layouts/Header";
import { Footer } from "../../layouts/Footer";
import classes from "./Application.module.scss";
import SEImg from ".";
export const Application = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <img src="/Se.svg" width={576.03} height={357.19}></img>
        <img src="/po.svg" width={576.03} height={357.19}></img>
      </div>
      <div className={classes.ApplicationContainer}>
        <h2>My Application</h2>
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
      </div>
    </Fragment>
  );
};
