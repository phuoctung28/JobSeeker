import React, { useEffect, useState } from "react";
import classes from "./Company.module.scss";
import { useNavigate } from "react-router-dom";
export const CompanyCard = ({ company }) => {
  const [companyInfo, setCompany] = useState({
    companyName: "",
  });
  useEffect(() => {
    if (company) {
      setCompany({
        companyName: company.name
      })
    }
  }, [company]);
  let navigate = useNavigate();
  const onRedirectToDetail = (e) => {
    e.preventDefault();
    navigate("/Job");
  };
  return (
    <div className={classes.card} onClick={onRedirectToDetail}>
      <div>
        <h1>{companyInfo.companyName}</h1>
      </div>
      <div className={classes.information}>
        <p>www.youtube.com</p>
      </div>
      <div className={classes.post}>3 job posted </div>
    </div>
  );
};
