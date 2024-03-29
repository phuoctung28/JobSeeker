import React, { useState } from "react";
import classes from "./JobCardDetail.module.scss";
import { Apply } from "../../Modal/Apply";
const Detail = ({ title, description }) => {
  return (
    <div className={classes.cardDetail}>
      <p>{title}</p>
      <div>{description}</div>
    </div>
  );
};
export const JobCardDetail = ({ data }) => {
  const { workLocation, salary, jobTitle } = data;
  return (
    <>
      <div className={classes.card}>
        <h4>Job Detail</h4>
        <div className={classes.detail}>
          <div className="w-50">
            <Detail title="Job type" description="Fulltime" />
            <Detail title="Location" description={workLocation} />
          </div>
          <div className="w-50 mx-3 px-3">
            <Detail title="Title" description={jobTitle} />
            <Detail title="Salary" description={salary} />
          </div>
        </div>
        {/* <Button className="rounded-2 my-5" onClick={onToggle}>
          Apply Jobs
        </Button> */}
        <Apply data={data}/>
      </div>
    </>
  );
};
