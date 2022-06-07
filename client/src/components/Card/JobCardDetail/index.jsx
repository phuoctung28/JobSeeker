import React from "react";
import Button from "../../Button";
import classes from "./JobCardDetail.module.scss";
const Detail = ({ title, description }) => {
  return (
    <div className={classes.cardDetail}>
      <p>{title}</p>
      <div>{description}</div>
    </div>
  );
};
const Tag = ({ tag }) => {
  return <div className={classes.tags}>{tag}</div>;
};
export const JobCardDetail = () => {
  return (
    <div className={classes.card}>
      <h4>Job Detail</h4>
      <div className={classes.detail}>
        <div>
          <Detail title="Job type" description="Fulltime" />
          <Detail title="Location" description="On-site" />
        </div>
        <div>
          <Detail title="Status" description="Active" />
          <Detail title="Broadcast time" description="10 Days" />
        </div>
      </div>
      <div className={classes.tag}>
        <p>Tags</p>
        <div>
          <Tag tag="React"/>
          <Tag tag="React"/>
          <Tag tag="React"/>
          <Tag tag="React"/>
          <Tag tag="React"/>
        </div>
      </div>
      <Button className="rounded-2">Apply Jobs</Button>
    </div>
  );
};
