import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import JobAPI from "../../../services/job";
import classes from "./Feature.module.scss";
export const Feature = ({ job }) => {
  return (
    <Link to={`job/${job.id}`} className={classes.card}>
      <div className={classes.information}>
        <h4>{job.jobTitle}</h4>
        <p className={classes.location}>{job.workLocation}</p>
      </div>
      <div className={classes.time}>Full-time</div>
      <div className={classes.tags}>
      </div>
      <div className={classes.starting__time}>{job.datePublished}</div>
    </Link>
  );
};
