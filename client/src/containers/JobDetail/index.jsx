import React, { Fragment, useContext, useEffect, useState } from "react";
import { JobCard } from "../../components/Card/JobCard";
import { JobCardDetail } from "../../components/Card/JobCardDetail";
import { Input } from "../../components/Input";
import classes from "./JobDetail.module.scss";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import JobAPI from "../../services/job";
export const JobDetail = () => {
  const { job } = useContext(AuthContext);
  const [currentJob, setCurrentJob] = useState({});
  let params = useParams();
  useEffect(() => {
    if (params) {
      JobAPI.searchJob(params.jobId)
        .then((result) => {
          setCurrentJob({ ...result.data });
        })
        .then(() => {
          console.log(currentJob.company);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  let {
    company,
    datePublished,
    jobSummary,
    jobTitle,
    qualifications,
    responsibility,
    salary,
    workLocation,
  } = job[10];
  // console.log(currentJob);
  responsibility = [...responsibility.split("\n")];
  qualifications = [...qualifications.split("\n")];
  jobSummary = [...jobSummary.split("\n")];
  // console.log(job[0]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Fragment>
      <div className={classes.job}>
        <div className="container">
          <div className={classes.slogan}>
            <h1>
              Discover The <p> OJT Jobs</p>
            </h1>
          </div>
        </div>
        <Input
          symbol={<i class="fa fa-search"></i>}
          groupClasses="w-50 mx-auto my-0"
          className="py-4 px-5 shadow-sm mx-auto my-0 w-50"
          placeholder="Search for job title"
        >
          <button className="px-2 button">Search</button>
        </Input>
      </div>
      <div className="container my-5">
        <h4>Job Details</h4>
        {/* <JobCard /> */}
      </div>
      <div className="container">
        <div className={classes.company}>
          <div className={classes.information}>
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <h4>Responsibilities</h4>
            <Fragment>
              {responsibility.map((sentence, index) => {
                return <p key={index}>{sentence}</p>;
              })}
            </Fragment>
            <h4>What we would like to see in our idea candidate</h4>
            <Fragment>
              {qualifications.map((sentence, index) => {
                return <p key={index}>{sentence}</p>;
              })}
            </Fragment>
            <h4>Benefits</h4>
            <Fragment>
              {jobSummary.map((sentence, index) => {
                return <p key={index}>{sentence}</p>;
              })}
            </Fragment>
          </div>
          <JobCardDetail data={currentJob} />
        </div>
      </div>
    </Fragment>
  );
};
