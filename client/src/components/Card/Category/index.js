import React, { useEffect, useState } from "react";
import classes from "./Category.module.scss";
export const CategoryCard = ({category}) => {
  const [categoryInfo, setCategoryInfo] = useState({
    name: ""
  });
  useEffect(() => {
    if (category) {
      setCategoryInfo({
        name: category.name
      })
    }
  }, [category]);
  const onClickCategory = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
  }
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
      <p>{categoryInfo.name}</p>
    </div>
  );
};
