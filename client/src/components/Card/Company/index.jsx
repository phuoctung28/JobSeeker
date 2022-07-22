import React, { useContext, useEffect, useState } from "react";
import classes from "./Company.module.scss";
import { useNavigate } from "react-router-dom";
import JobAPI from "../../../services/job";
import { AuthContext } from "../../../context/AuthContext";
export const CompanyCard = ({ company }) => {
  const { setJobList } = useContext(AuthContext);
  const [companyInfo, setCompany] = useState({
    companyName: "",
  });
  useEffect(() => {
    if (company) {
      setCompany({
        companyName: company.name,
        id: company.id,
      });
      const fetchCompanyJob = async () => {
        const { data } = await JobAPI.fetchCompanyJob(company.id);
        setCompany({
          companyName: company.name,
          id: company.id,
          quantity: data.length,
        });
      };
      fetchCompanyJob();
    }
  }, [company]);
  let navigate = useNavigate();
  const onRedirectToDetail = (e) => {
    e.preventDefault();
    const loadJob = async () => {
      try {
        const jobData = await JobAPI.loadJobByCompany(companyInfo.id);
        // console.log(jobData.data);
        setJobList(jobData.data);
      } catch (error) {
        throw error;
      }
    };
    loadJob();
    navigate(`/job/company/${company.id}`);
  };
  return (
    <div className={classes.card} onClick={onRedirectToDetail}>
      <div>
        <h1 className={classes.companyName}>{companyInfo?.companyName}</h1>
      </div>
      {/* <p>{companyInfo.id}</p> */}
      <div className={classes.post}>{companyInfo?.quantity} jobs posted</div>
    </div>
  );
};
