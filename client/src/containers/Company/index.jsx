import React, { Fragment } from "react";
import { CompanyCard } from "../../components/Card/Company";
import { Input } from "../../components/Input";
import classes from "./Company.module.scss"
export const CompanyPage = () => {
  return (
    <Fragment>
      <div className={classes.company}>
        <div className="container">
          <div className={classes.slogan}>
              <h1>
                Exploring amazing <p>Companies</p>
              </h1>
          </div>
        </div>
        <Input
          symbol={<i class="fa fa-search"></i>}
          groupClasses="w-50 mx-auto my-0"
          className="py-4 px-5 shadow-sm mx-auto my-0 w-50"
          placeholder="Search for job title"
        >
          <button className="px-2 button">Search</button>
        </Input>
      </div>
      <div className="container my-5">
        <h4>Companies List</h4>
        <CompanyCard />
      </div>
    </Fragment>
  );
};
