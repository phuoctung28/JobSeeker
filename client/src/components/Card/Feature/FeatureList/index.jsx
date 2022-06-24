import React, { useEffect, useState } from "react";
import { Feature } from "../";
import { mockData } from "../../../../mockData";
export const FeatureList = ({ jobList }) => {
  let jobListss = mockData;
  // console.log(jobList[0]);
  // useEffect(() => {
  //   if (jobList) {
  //     effect
  //   }
  //   return () => {
  //     cleanup
  //   };
  // }, [input]);
  return (
    <div className="feature__list">
<<<<<<< HEAD
      {jobListss.map((job) => (
        <Feature job={job} />
=======
      {jobList.map((job, index) => (
        <Feature job={job} key={index}/>
>>>>>>> d92995fcbe675ed9ba5bcf788d95434e528f0ac1
      ))}
      {/* <Feature job={jobList[0]} /> */}
    </div>
  );
};
