import React, { Fragment, useEffect, useState } from "react";
import { CompanyCard } from "../../components/Card/Company";
import { CompanyList } from "../../components/Card/Company/CompanyList";
import { Input } from "../../components/Input";
import { loadAllCompany } from "../../context/ActionCreator";
import classes from "./Company.module.scss"
export const CompanyPage = () => {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    loadAllCompany()
    .then((result) => {
      setCompany(result.data);
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
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
          symbol={<i className="fa fa-search"></i>}
          groupClasses="w-50 mx-auto my-0"
          className="py-4 px-5 shadow-sm mx-auto my-0 w-50"
          placeholder="Search for job title"
        >
          <button className="px-2 button">Search</button>
        </Input>
      </div>
      <div className="container my-5">
        <h4>Companies List</h4>
        <CompanyList companyList={company}/>
      </div>
    </Fragment>
  );
};
