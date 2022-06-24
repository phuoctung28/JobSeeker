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
      {jobListss.map((job) => (
        <Feature job={job} />
      ))}
      {/* <Feature job={jobList[0]} /> */}
    </div>
  );
};
