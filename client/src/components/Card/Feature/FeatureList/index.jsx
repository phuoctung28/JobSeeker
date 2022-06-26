import React, { useEffect, useState } from "react";
import { Feature } from "../";
import { mockData } from "../../../../mockData";
export const FeatureList = ({ jobList }) => {
  return (
    <div className="feature__list">
      {jobList.map((job, index) => (
        <Feature job={job} key={index}/>
      ))}
    </div>
  );
};
