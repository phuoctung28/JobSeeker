import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadJobByCategory } from "../../../context/ActionCreator";
import JobAPI from "../../../services/job";
import classes from "./Category.module.scss";
export const CategoryCard = ({ category }) => {
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

  return (
    <Link to={`/job/category/${categoryInfo.id}`} className={classes.category}>
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
    </Link>
  );
};
