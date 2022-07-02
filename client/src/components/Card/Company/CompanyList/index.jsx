import React from "react";
import { CompanyCard } from "..";
import classes from "./CompanyList.module.scss";
export const CompanyList = ({ companyList }) => {
  return (
    <div className={classes.container}>
      {/* <CompanyCard />
      <CompanyCard />
      <CompanyCard /> */}
      {companyList.map((company, index) => (
        <CompanyCard company={company} key={index} />
      ))}
    </div>
  );
};
