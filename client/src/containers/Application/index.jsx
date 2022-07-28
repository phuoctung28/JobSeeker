import React, { Fragment, useContext } from "react";
import { ApplicationCard } from "../../components/Card/Application";
import classes from "./Application.module.scss";
import { AuthState } from "../../context/AuthState";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
export const Application = () => {
  const { application } = useContext(AuthContext);
  return (
    <Fragment>
      {application ? (
        <>
          {" "}
          <div className={classes.container}>
            <img src="/Se.svg" width={576.03} height={357.19}></img>
            <img src="/po.svg" width={576.03} height={357.19}></img>
          </div>
          <div className={classes.ApplicationContainer}>
            <h2>My Application</h2>
            <ApplicationCard application={application} />
          </div>{" "}
        </>
      ) : (
        <>
          <div className={classes.container}>
            <img src="/Se.svg" width={576.03} height={357.19}></img>
            <img src="/po.svg" width={576.03} height={357.19}></img>
          </div>
          <div className={classes.ApplicationContainer}>
            <h2>You have not any application yet.</h2>
            <Link className={classes.link} to="/">Let find some job to apply</Link>
          </div>
        </>
      )}
    </Fragment>
  );
};
