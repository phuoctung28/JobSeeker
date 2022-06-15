import React from "react";
import classes from "./Category.module.scss";
export const CategoryCard = (props) => {
  const { category, img, imgChild } = props;
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
      <p>{category}</p>
    </div>
  );
};
