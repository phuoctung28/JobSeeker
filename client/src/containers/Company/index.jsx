import React, { Fragment } from "react";
import { CompanyCard } from "../../components/Card/Company";
import { Input } from "../../components/Input";
import { Footer } from "../../layouts/Footer";
import { Header } from "../../layouts/Header";

export const CompanyPage = () => {
  return (
    <Fragment>
      <Header id="homepage" />
      <div className="header py-5">
        <div className="container">
          <div className="d-flex ml-5 flex-row justify-content-between my-5 ">
            <div className="mr-5">
              <h1 className="d-inline">
                Exploring amazing <p className="text">Companies</p>
              </h1>
            </div>
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
