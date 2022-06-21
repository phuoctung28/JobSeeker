import React, { useEffect, useState } from "react";
import {Feature} from "../index"
export const FeatureList = ({ jobList }) => {
 
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    if (jobList) {
      console.log(jobList);
      setJobs(jobList)
    }
  }, [jobList,jobs]);
  return (
    <div className="feature__list">
      {jobs.forEach((job) => {
        <Feature job={job}/>;
      })}
    </div>
  );
};
