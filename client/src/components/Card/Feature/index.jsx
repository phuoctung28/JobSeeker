import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobAPI from "../../../services/job";
import classes from "./Feature.module.scss";
export const Feature = ({ job }) => {
  // const { jobTitle, workLocation, datePublished } = job;
  let navigate = useNavigate();
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

  const Tag = ({ tag }) => {
    return <div className={classes.tag}>{tag}</div>;
  };
  const onRedirectToDetail = (e) => {
    e.preventDefault();
    // let a = await JobAPI.searchJob(jobInfo.jobId);
    // console.log(a.data);
    navigate(`job/${jobInfo.jobId}`);
  };
  return (
    <div className={classes.card} onClick={onRedirectToDetail}>
      <div className={classes.information}>
        <h4>{jobInfo.jobTitle}</h4>
        <p className={classes.location}>{jobInfo.workLocation}</p>
      </div>
      <div className={classes.time}>Full-time</div>
      <div className={classes.tags}>
        <Tag tag="React" />
        <Tag tag="React" />
        <Tag tag="React" />
      </div>
      <div className={classes.starting__time}>{jobInfo.datePublished}</div>
    </div>
  );
};
