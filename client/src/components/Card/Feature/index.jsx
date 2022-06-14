import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Feature.module.scss";
export const Feature = () => {
  let navigate = useNavigate();
  const Tag = ({ tag }) => {
    return <div className={classes.tag}>{tag}</div>;
  };
  const onRedirectToDetail = (e) => {
    e.preventDefault()
    navigate("/job/jobDetail")
  }
  return (
    <div className={classes.card} onClick={onRedirectToDetail}>
      <div>
        <img src="https://img.icons8.com/color/48/undefined/google-logo.png" />
      </div>
      <div className={classes.information}>
        <h4>Product Designer</h4>
        <p>Google, San Francisco</p>
      </div>
      <div className={classes.time}>Fulltime</div>
      <div className={classes.tags}>
        <Tag tag="React" />
        <Tag tag="React" />
        <Tag tag="React" />
      </div>
      <div className={classes.starting__time}>Starting May 2022</div>
    </div>
  );
};
