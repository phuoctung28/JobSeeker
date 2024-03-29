import React, { Fragment, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { CompanyCard } from "../../components/Card/Company";
import { CompanyList } from "../../components/Card/Company/CompanyList";
import { Input } from "../../components/Input";
import { SearchInput } from "../../components/Search";
import { loadAllCompany } from "../../context/ActionCreator";
import { mockCompany } from "../../mockData";
import classes from "./Company.module.scss";
export const CompanyPage = () => {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    loadAllCompany()
      .then((result) => {
        setCompany(result.data);
        // console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onSemesterHandler = (e) => {
    console.log(e.target.innerText);
  };
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
        <SearchInput className="w-50" groupClasses="w-50 mx-auto my-0" />
      </div>
      <h4 className="container my-5">Companies List</h4>
      <div className="container my-5">
        <CompanyList companyList={company} />
      </div>
    </Fragment>
  );
};
