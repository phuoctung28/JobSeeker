import classes from "./Search.module.scss";

import React, { useState } from "react";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import JobAPI from "../../services/job";

export const SearchInput = ({ jobData, className, groupClasses }) => {
  let navigate = useNavigate();
  let classes = "py-4 px-5 shadow-sm " + className;
  const [formData, setFormData] = useState("");
  const onChangeHandler = (data) => {
    setFormData(data);
  };
  const onSearchHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    const data = await JobAPI.searchJobByTitle(formData);
    console.log(data);
    setFormData("");
  };
  return (
    <form onSubmit={onSearchHandler}>
      <Input
        symbol={<i className="fa fa-search"></i>}
        className={classes}
        groupClasses={groupClasses}
        placeholder="Search for job title"
        onChangeHandler={onChangeHandler}
        value={formData}
      >
        <button className="px-2 button">Search</button>
      </Input>
    </form>
  );
};
