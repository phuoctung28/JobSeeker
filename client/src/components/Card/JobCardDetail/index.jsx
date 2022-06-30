import React, { useState } from "react";
import Button from "../../Button";
import classes from "./JobCardDetail.module.scss";
import { Apply } from "../../Modal/Apply";
const Detail = ({ title, description }) => {
  return (
    <div className={classes.cardDetail}>
      <p>{title}</p>
      <div>{description}</div>
    </div>
  );
};
export const JobCardDetail = () => {
  const [state, setState] = useState("close");
  // const onToggle = (e) => {
  //   e.preventDefault();
  //   setState(() => (state === "open" ? "close" : "open"));
  // };
  return (
    <>
      <div className={classes.card}>
        <h4>Job Detail</h4>
        <div className={classes.detail}>
          <div className="w-50">
            <Detail title="Job type" description="Fulltime" />
            <Detail title="Location" description="Lot B3, Sang Tao Street, E-Office zone, Tan Thuan Dong Ward, District 7, Ho Chi Minh City, Vietnam" />
          </div>
          <div className="w-50 mx-3 px-3">
            <Detail title="Title" description="Giảng viên Công Nghệ Thông Tin" />
            <Detail title="Salary" description="10 Days" />
          </div>
        </div>
        {/* <Button className="rounded-2 my-5" onClick={onToggle}>
          Apply Jobs
        </Button> */}
        <Apply/>
      </div>
    </>
  );
};
