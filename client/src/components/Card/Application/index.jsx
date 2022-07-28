import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import moment from "moment";
import classes from "./Application.module.scss";
export const ApplicationCard = ({ application }) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img
          className={classes.image}
          src="/logo-fpt-login.png"
          sizes="60px"
          alt="companyLogo"
          height={60}
          width={60}
        />
        <div className={classes.ApplicationDetail}>
          <h5 className={classes.JobTitle}>{application?.job?.jobTitle}</h5>
          <a href="/" className={classes.CompanyLink}>
            {application?.job?.company?.name}
          </a>
          <div className={classes.SubmittedDate}>
            Published on  {moment(application?.job?.datePublished).format('YYYY-MM-DD')}
          </div>
        </div>
        <div className={classes.statusSection}>
          <div className={classes.status}>Pending</div>
          <Link to={`/job/${application?.job?.id}`} className={classes.button}>View Job</Link>
        </div>
      </div>
    </div>
  );
};
