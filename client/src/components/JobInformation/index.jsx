import React, { Fragment } from "react";
import classes from "./JobInformation.module.scss";
export const JobInformation = ({ data }) => {
  const { company, responsibility, qualifications, jobSummary } = data;
  // console.log(typeof responsibility);

  return (
    <div className={classes.information}>
      <h4>{company?.name}</h4>
      <p>{company?.description}</p>
      <h4>Responsibilities</h4>
      {responsibility?.split("\n")?.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <h4>What we would like to see in our idea candidate</h4>
      {qualifications?.split("\n")?.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <h4>Benefits</h4>
      {jobSummary?.split("\n")?.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};
