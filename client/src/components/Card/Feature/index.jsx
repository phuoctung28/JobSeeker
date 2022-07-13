import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Feature.module.scss";
export const Feature = ({ job }) => {
  let { jobTitle, workLocation, datePublished } = job;
  datePublished = new Date(datePublished);
  // console.log( datePublished.toDateString());
  return (
    <Link to={`/job/${job.id}`} className={classes.card}>
      <div className={classes.information}>
        <h4>{jobTitle}</h4>
        <p className={classes.location}>{workLocation}</p>
      </div>
      <div className={classes.time}>Full-time</div>
      <div className={classes.tags}></div>
      <div className={classes.starting__time}>
        <div>Date published:</div>
        <p>{datePublished.toDateString()}</p>
      </div>
    </Link>
  );
};
