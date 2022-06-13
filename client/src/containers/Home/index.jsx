import { getAuth } from "firebase/auth";
import React, { Fragment, useEffect } from "react";
import { CategoryList } from "../../components/Card/Category/CategoryList";
import { Input } from "../../components/Input";
import {Feature} from "../../components/Card/Feature"
import { Footer } from "../../layouts/Footer";
import { Header } from "../../layouts/Header";
import "./index.css";
import Button from "../../components/Button";
export const Homepage = () => {
  // console.log(auth.currentUser.displayName);
  // useEffect(() => {

  // }, []);
  return (
    <Fragment>
      <div className="header py-5">
        <div className="container">
          <Header id="homepage" />
          <div className="d-flex ml-5 flex-row justify-content-between my-5 ">
            <div className="mr-5">
              <h1>
                Discover Your<br></br>
                <strong className="text">Dream</strong> Job
              </h1>
              <div className="mt-5">
                <Input
                  symbol={<i class="fa fa-search"></i>}
                  className="py-4 px-5 shadow-sm"
                  placeholder="Search for job title"
                >
                  <button className="px-2 button">Search</button>
                </Input>
                <div className="d-flex flex-row example">
                  <div className="font-weight-bold py-2">Example:</div>
                  <div className="d-flex flex-row ">
                    <div className="border rounded mx-2 p-2 pe-auto btn">
                      Front-end
                    </div>
                    <div className="border rounded mx-2 p-2 pe-auto btn">
                      Front-end
                    </div>
                    <div className="border rounded mx-2 p-2 pe-auto btn">
                      Front-end
                    </div>
                    <div className="border rounded mx-2 p-2 pe-auto btn">
                      Front-end
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="/bg.svg" width={576.03} height={357.19} alt="" />
          </div>
        </div>
      </div>
      <div className="content my-5">
        <div className="container">
          <div>
            <h4 className="my-4">Categories</h4>
            <CategoryList />
          </div>
          <div>
          <h4 className="my-4">Featured Jobs</h4>
            <Feature />
            <Feature />
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
          <Button className="mx-auto">More jobs</Button>
        </div>
      </div>
      <Footer />
      </Fragment>
  );
};
