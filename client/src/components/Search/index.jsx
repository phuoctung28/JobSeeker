import classes from "./Search.module.scss";

import React, { useState } from "react";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";

export const SearchInput = ({ jobData }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState("");
  const onSearchHandler = (e, formData) => {
    e.preventDefault();
    console.log(formData);
    navigate("/job");
    return jobData;
  };
  return (
    <Input
      symbol={<i className="fa fa-search"></i>}
      className="py-4 px-5 shadow-sm"
      placeholder="Search for job title"
    >
      <button className="px-2 button">Search</button>
    </Input>
  );
};
