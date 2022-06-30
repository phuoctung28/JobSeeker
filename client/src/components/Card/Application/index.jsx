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
          height={128}
          width={128}
        />
        <h3>Company Name</h3>
        <Button className={classes.button}>View Job</Button>
      </div>
    </div>
  );
};
