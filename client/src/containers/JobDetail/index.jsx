import React, { useEffect } from "react";
import { JobCard } from "../../components/Card/JobCard";
import { JobCardDetail } from "../../components/Card/JobCardDetail";
import { Input } from "../../components/Input";
import { Header } from "../../layouts/Header";
import "./index.scss";
import { Footer } from "../../layouts/Footer";
import Button from "../../components/Button";

export const JobDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="header py-5">
        <div className="container">
          <Header id="homepage" />
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
        <h4>Job Details</h4>
        <JobCard />
      </div>
      <div className="container my-5 company">
        <div className="information">
          <h4 className="">Company overview</h4>
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
          <Button fullWidth className="rounded-2">
            Apply Job
          </Button>
        </div>
        <JobCardDetail />
      </div>
      <Footer />
    </div>
  );
};
