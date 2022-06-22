import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Feature.module.scss";
export const Feature = ({ job }) => {
  // const { jobTitle, workLocation, datePublished } = job;
  const [jobInfo, setJob] = useState({
    jobTitle: "",
    workLocation: "",
    datePublished: "",
  });
  useEffect(() => {
    if (job) {
      console.log(typeof job.datePublished);
    setJob({
      jobTitle: job.jobTitle,
      workLocation: job.workLocation,
      datePublished: new Date(job.datePublished).toDateString()
    })
  }
  }, [job]);
  
  console.log(job);
  let navigate = useNavigate();
  const Tag = ({ tag }) => {
    return <div className={classes.tag}>{tag}</div>;
  };
  const onRedirectToDetail = (e) => {
    e.preventDefault();
    navigate("/job/jobDetail");
  };
  return (
    <div className={classes.card} onClick={onRedirectToDetail}>
      <div className={classes.information}>
        <h4>{jobInfo.jobTitle}</h4>
        {/* <div>title</div> */}
        {/* jobTitle */}
        <p className={classes.location}>{jobInfo.workLocation}</p>
        {/* <div>title</div> */}
        {/* workLocation */}
      </div>
      <div className={classes.time}>{jobInfo.datePublished}</div>

      <div className={classes.tags}>
        <Tag tag="React" />
        <Tag tag="React" />
        <Tag tag="React" />
      </div>
      <div className={classes.starting__time}>Starting May 2022</div>
    </div>
  );
};
