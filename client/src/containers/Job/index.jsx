import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CategoryList } from "../../components/Card/Category/CategoryList";
import { Feature } from "../../components/Card/Feature";
import { FeatureList } from "../../components/Card/Feature/FeatureList";
import { Input } from "../../components/Input";
import { SearchInput } from "../../components/Search";
import { loadAllJob } from "../../context/ActionCreator";
import { AuthContext } from "../../context/AuthContext";
import { mockData } from "../../mockData";
import classes from "./Job.module.scss";
export const JobPage = () => {
  const { job, setJob, jobList } = useContext(AuthContext);
  // console.log(jobList);
  const { state } = useLocation();
  // console.log(state);
  useEffect(() => {
    // console.log(jobList);
    const loadJob = async () => {
      try {
        const jobData = await loadAllJob();
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
        <div className="w-50 mx-auto">
          <SearchInput />
        </div>
      </div>
      <div className="container my-5">
        <div>
          <h4 className="my-4">Categories</h4>
          <CategoryList />
        </div>
        <div>
          <h4 className="my-4">Related Job Postings</h4>
          {jobList.length === 0 ? (
            <>
              <h3 className="text-danger">Xin lỗi! </h3>
              <p>Không có việc làm phù hợp.</p>
            </>
          ) : (
            <>
              <div className={classes.description}>
                <span>{jobList === null ? job.length : jobList.length}</span>{" "}
                việc làm
              </div>
              <FeatureList jobList={jobList === null ? job : jobList} />
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};
