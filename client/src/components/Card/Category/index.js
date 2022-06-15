import React from "react";
import "./index.css";
export const CategoryCard = (props) => {
  const { category, img, imgChild } = props;
  const onClickCategory = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
  }
  return (
    <div className="category" onClick={onClickCategory}>
      <img
        className="first"
        width={48}
        height={48}
        src="/icons8-image-48.png"
        alt="design"
      />
      <img
        className="second"
        width={48}
        height={48}
        src="/icons8-image-48 (1).png"
        alt="design"
      />
      <p>{category}</p>
    </div>
  );
};
