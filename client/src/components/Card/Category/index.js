import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loadJobByCategory } from "../../../context/ActionCreator";
import { AuthContext } from "../../../context/AuthContext";
import JobAPI from "../../../services/job";
import classes from "./Category.module.scss";
export const CategoryCard = ({ category }) => {
  let navigate = useNavigate();
  const { setJobList } = useContext(AuthContext);
  const [categoryInfo, setCategoryInfo] = useState({
    name: "",
    id: "",
  });
  useEffect(() => {
    if (category) {
      console.log(category);
      setCategoryInfo({
        name: category.name,
        id: category.id.toString(),
      });
    }
  }, [category]);
  const onRedirectToJobPage = (e) => {
    e.preventDefault();
    const loadJob = async () => {
      try {
        const jobData = await JobAPI.searchJobByCategory(
          categoryInfo.id.toString()
        );
        setJobList(jobData.data);
      } catch (error) {
        throw error;
      }
    };
    loadJob();
    navigate(`/job/category/${categoryInfo.id}`);
  };
  return (
    <div onClick={onRedirectToJobPage} className={classes.category}>
      <img
        className={classes.first}
        width={48}
        height={48}
        src="/icons8-image-48.png"
        alt="design"
      />
      <img
        className={classes.second}
        width={48}
        height={48}
        src="/icons8-image-48 (1).png"
        alt="design"
      />
      <p className={classes.name}>{categoryInfo.name}</p>
    </div>
  );
};
