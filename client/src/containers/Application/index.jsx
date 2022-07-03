import React, { Fragment } from "react";
import { ApplicationCard } from "../../components/Card/Application";
import { Header } from "../../layouts/Header";
import { Footer } from "../../layouts/Footer";
import classes from "./Application.module.scss";
export const Application = () => {
  return (
    <Fragment>
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
    </Fragment>
  );
};
