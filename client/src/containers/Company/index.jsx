import React, { Fragment, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { CompanyCard } from "../../components/Card/Company";
import { CompanyList } from "../../components/Card/Company/CompanyList";
import { Input } from "../../components/Input";
import { loadAllCompany } from "../../context/ActionCreator";
import { mockCompany } from "../../mockData";
import classes from "./Company.module.scss";
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
      <h4 className="container my-5">Companies List</h4>
      <div className="container my-5">
        <Dropdown>
          <Dropdown.Toggle className={classes.semester} id="dropdown-basic">
            Semester
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Summer 2022</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Fall 2022</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Spring 2023</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <CompanyList companyList={mockCompany} />
      </div>
    </Fragment>
  );
};
