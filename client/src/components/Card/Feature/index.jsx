import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import JobAPI from "../../../services/job";
import classes from "./Feature.module.scss";
export const Feature = ({ job }) => {
  const [jobInfo, setJob] = useState({
    jobId: null,
    jobTitle: "",
    workLocation: "",
    datePublished: "",
  });
  useEffect(() => {
    if (job) {
      // console.log(typeof job.datePublished);
      setJob({
        jobId: job.id,
        jobTitle: job.jobTitle,
        workLocation: job.workLocation,
        datePublished: new Date(job.datePublished).toDateString(),
      });
    }
  }, [job]);
  return (
    <Link to={`job/${jobInfo.jobId}`} className={classes.card}>
      <div className={classes.information}>
        <h4>{jobInfo.jobTitle}</h4>
        <p className={classes.location}>{jobInfo.workLocation}</p>
      </div>
      <div className={classes.time}>Full-time</div>
      <div className={classes.tags}>
        {/* <Tag tag="React" />
        <Tag tag="React" />
        <Tag tag="React" /> */}
      </div>
      <div className={classes.starting__time}>{jobInfo.datePublished}</div>
    </Link>
  );
};
