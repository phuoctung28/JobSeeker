import React, { Fragment, useEffect } from "react";
import { JobCard } from "../../components/Card/JobCard";
import { JobCardDetail } from "../../components/Card/JobCardDetail";
import { Input } from "../../components/Input";
import classes from "./JobDetail.module.scss";
import Button from "../../components/Button";
export const JobDetail = () => {
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
        <h4>Job Details</h4>
        <JobCard />
      </div>
      <div className="container">
      <div className={classes.company}>
        <div className={classes.information}>
          <h4>Company overview</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
            diam malesuada nisl eget commodo sed. Eu, varius vestibulum dui elit
            sed. Penatibus consectetur consectetur porta nulla volutpat vitae
            adipiscing. Eleifend donec volutpat pretium faucibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Dictumst diam malesuada
            nisl eget commodo sed. Eu, varius vestibulum dui elit sed. Penatibus
            consectetur consectetur porta nulla volutpat vitae adipiscing.
            Eleifend donec volutpat pretium faucibus.
          </p>
          <h4>Role Overview</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
            diam malesuada nisl eget commodo sed. Eu, varius vestibulum dui elit
            sed. Penatibus consectetur consectetur porta nulla volutpat vitae
            adipiscing. Eleifend donec volutpat pretium faucibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Dictumst diam malesuada
            nisl eget commodo sed. Eu, varius vestibulum dui elit sed. Penatibus
            consectetur consectetur porta nulla volutpat vitae adipiscing.
            Eleifend donec volutpat pretium faucibus.
          </p>
          <h4>Responsibilities</h4>
          <p>
            - Incident management: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque, in at semper ut adipiscing. <br />
            - Incident management: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque, in at semper ut adipiscing. <br />
            - Incident management: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque, in at semper ut adipiscing. <br />
            - Incident management: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque, in at semper ut adipiscing. <br />
            - Incident management: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque, in at semper ut adipiscing. <br />
          </p>
          <h4>What we would like to see in our idea candidate</h4>
          <p>
            - Incident management: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque, in at semper ut adipiscing. <br />
            - Incident management: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque, in at semper ut adipiscing. <br />
            - Incident management: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque, in at semper ut adipiscing. <br />
            - Incident management: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque, in at semper ut adipiscing. <br />
            - Incident management: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque, in at semper ut adipiscing. <br />
          </p>
        </div>
        <JobCardDetail />
      </div>
      </div>
 
    </Fragment>
  );
};
