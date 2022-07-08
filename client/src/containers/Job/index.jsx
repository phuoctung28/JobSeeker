import React, { Fragment, useContext, useEffect } from "react";
import { CategoryList } from "../../components/Card/Category/CategoryList";
import { Feature } from "../../components/Card/Feature";
import { FeatureList } from "../../components/Card/Feature/FeatureList";
import { Input } from "../../components/Input";
import { loadAllJob } from "../../context/ActionCreator";
import { AuthContext } from "../../context/AuthContext";
import { mockData } from "../../mockData";
import classes from "./Job.module.scss";
export const JobPage = () => {
  const { job, setJob } = useContext(AuthContext);
  useEffect(() => {
    const loadJob = () => {
      try {
        const jobData = loadAllJob();
        setJob(jobData.data);
      } catch (error) {
        throw error;
      }
    };
    loadJob();
    return () => {};
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Fragment>
      <div className={classes.job}>
        <div className="container">
          <div className={classes.slogan}>
            <h1>
              Discover The <p> OJT Jobs</p>
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
        <div>
          <h4 className="my-4">Categories</h4>
          <CategoryList />
        </div>
        <div>
          <h4 className="my-4">Related Job Postings</h4>
          <FeatureList jobList={mockData} />
        </div>
      </div>
    </Fragment>
  );
};
