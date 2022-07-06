import React, { useEffect, useState } from "react";
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
  const onClickCategory = async (e) => {
    e.preventDefault();
    // console.log(loadJobByCategory(categoryInfo.id));
    console.log(categoryInfo.id);
    const categoryMock = await JobAPI.searchJobByCategory(categoryInfo.id);
    console.log(categoryMock);
  };
  return (
    <div className={classes.category} onClick={onClickCategory}>
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
