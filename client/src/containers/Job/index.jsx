import React, { Fragment } from "react";
import { CategoryList } from "../../components/Card/Category/CategoryList";
import { Feature } from "../../components/Card/Feature";
import { Input } from "../../components/Input";
import { Footer } from "../../layouts/Footer";
import { Header } from "../../layouts/Header";
import "./index.css";
export const JobPage = () => {
  return (
    <Fragment>
      <div className="header py-5">
        <div className="container">
          <div className="d-flex ml-5 flex-row justify-content-between my-5 ">
            <div className="mr-5">
              <h1 className="d-inline">
                Discover The <p className="text"> OJT Jobs</p>
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
        <div>
          <h4 className="my-4">Categories</h4>
          <CategoryList />
        </div>
        <div>
          <h4 className="my-4">Related Job Postings</h4>
          <Feature />
          <Feature />
          <Feature />
          <Feature />
          <Feature />
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </div>
      </div>
    </Fragment>
  );
};
