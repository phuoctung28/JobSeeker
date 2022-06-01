import React from "react";
import { Input } from "../../components/Input";
import { Header } from "../../layouts/Header";
import "./index.css";
export const Homepage = () => {
  return (
    <div className="vh-100">
      <div className="header py-5">
      <div className="container">
      <Header id="homepage" />
        <div className="d-flex ml-5 flex-row justify-content-between mt-5 ">
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
                <div className="font-weight-bold py-2">
                  Example:
                </div>
                <div className="d-flex flex-row ">
                  <div className="border rounded mx-2 p-2 pe-auto btn">Front-end</div>
                  <div className="border rounded mx-2 p-2 pe-auto btn">Front-end</div>
                  <div className="border rounded mx-2 p-2 pe-auto btn">Front-end</div>
                  <div className="border rounded mx-2 p-2 pe-auto btn">Front-end</div>
                </div>
              </div>
            </div>
          </div>
          <img src="/bg.svg" width={576.03} height={357.19} alt="" />
        </div>
      </div>

      </div>
      <div className="content">
      <div>
        <div>Categories</div>
      </div>
      </div>
    </div>
  );
};
