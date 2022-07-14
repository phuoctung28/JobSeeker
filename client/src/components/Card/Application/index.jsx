import React from "react";
import Button from "../../Button";
import classes from "./Application.module.scss";
export const ApplicationCard = () => {
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
          <h5 className={classes.JobTitle}>Thực tập sinh Kỹ Sư Dữ Liệu</h5>
          <a href="/" className={classes.CompanyLink}>
            KMS Technology
          </a>
          <div className={classes.SubmittedDate}>
            Submitted on February 15 2022, 6:02 pm
          </div>
        </div>
        <div className={classes.statusSection}>
          <div className={classes.status}>Pending</div>
          <Button className={classes.button}>View Job</Button>
        </div>
      </div>
    </div>
  );
};
