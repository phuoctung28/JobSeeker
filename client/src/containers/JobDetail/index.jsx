import React, { Fragment, useEffect, useState } from "react";
import { JobCardDetail } from "../../components/Card/JobCardDetail";
import { Input } from "../../components/Input";
import classes from "./JobDetail.module.scss";
import { useParams } from "react-router-dom";
import JobAPI from "../../services/job";
import { JobInformation } from "../../components/JobInformation";
import { SearchInput } from "../../components/Search";
export const JobDetail = () => {
  const [currentJob, setCurrentJob] = useState({});
  const { jobId } = useParams();
  useEffect(() => {
    // console.log("Mounting");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fetchJobDetail = async () => {
      try {
        // console.log(" did update", jobId);
        const jobData = await JobAPI.searchJob(jobId);
        // setCurrentJob(abc);
        setCurrentJob(jobData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobDetail();

    return () => {};
  }, []);
  // console.log(currentJob);
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
        <div className="w-50 mx-auto">
          <SearchInput />
        </div>
      </div>
      <div className="container my-5">
        <h4>Job Details</h4>
        {/* <JobCard /> */}
      </div>
      <div className="container">
        <div className={classes.company}>
          <JobInformation data={currentJob} />
          <JobCardDetail data={currentJob} />
        </div>
      </div>
    </Fragment>
  );
};
