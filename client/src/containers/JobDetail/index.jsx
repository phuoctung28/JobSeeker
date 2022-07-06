import React, { Fragment, useEffect, useState } from "react";
import { JobCardDetail } from "../../components/Card/JobCardDetail";
import { Input } from "../../components/Input";
import classes from "./JobDetail.module.scss";
import { useParams } from "react-router-dom";
import JobAPI from "../../services/job";
export const JobDetail = () => {
  const [currentJob, setCurrentJob] = useState({});
  const { jobId } = useParams();
  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        console.log(" did update", jobId);
        const jobData = await JobAPI.searchJob(jobId);
        setCurrentJob(jobData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobDetail();
    console.log("Unmount");

    return () => {
      console.log(currentJob);
    };
  }, [currentJob]);

  return (
    <></>
    // <Fragment>
    //   <div className={classes.job}>
    //     <div className="container">
    //       <div className={classes.slogan}>
    //         <h1>
    //           Discover The <p> OJT Jobs</p>
    //         </h1>
    //       </div>
    //     </div>
    //     <Input
    //       symbol={<i class="fa fa-search"></i>}
    //       groupClasses="w-50 mx-auto my-0"
    //       className="py-4 px-5 shadow-sm mx-auto my-0 w-50"
    //       placeholder="Search for job title"
    //     >
    //       <button className="px-2 button">Search</button>
    //     </Input>
    //   </div>
    //   <div className="container my-5">
    //     <h4>Job Details</h4>
    //     {/* <JobCard /> */}
    //   </div>
    //   <div className="container">
    //     <div className={classes.company}>
    //       <div className={classes.information}>
    //         <h4>{currentJob.company.name}</h4>
    //         <p>{currentJob.company.description}</p>
    //         <h4>Responsibilities</h4>
    //         <Fragment>
    //           {[...currentJob.responsibility.split("\n")].map((sentence, index) => {
    //             return <p key={index}>{sentence}</p>;
    //           })}
    //         </Fragment>
    //         <h4>What we would like to see in our idea candidate</h4>
    //         <Fragment>
    //           {[...currentJob.qualifications.split("\n")].map((sentence, index) => {
    //             return <p key={index}>{sentence}</p>;
    //           })}
    //         </Fragment>
    //         <h4>Benefits</h4>
    //         <Fragment>
    //           {[...currentJob.jobSummary.split("\n")].map((sentence, index) => {
    //             return <p key={index}>{sentence}</p>;
    //           })}
    //         </Fragment>
    //       </div>
    //       <JobCardDetail data={currentJob} />
    //     </div>
    //   </div>
    // </Fragment>
  );
};
