// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import classes from "./Feature.module.scss";
// export const Feature = (props) => {
//   // const { jobTitle, workLocation, datePublished } = props.job;
//   // const [job, setJob] = useState({
//   //   jobTitle: "",
//   //   workLocation: "",
//   //   datePublished: "",
//   // });
//   // useEffect(() => {
//   //   if (props.job) {
//   //     setJob({
//   //       jobTitle: jobTitle,
//   //       workLocation: workLocation,
//   //       datePublished: datePublished,
//   //     });
//   //   }
//   // }, []);
//   let navigate = useNavigate();
//   const Tag = ({ tag }) => {
//     return <div className={classes.tag}>{tag}</div>;
//   };
//   const onRedirectToDetail = (e) => {
//     e.preventDefault();
//     navigate("/job/jobDetail");
//   };
//   return (
//     <div className={classes.card} onClick={onRedirectToDetail}>
//       <div className={classes.information}>
//         <h4>{job.jobTitle}</h4>
//         {/* jobTitle */}
//         <p>{job.workLocation}</p>
//         {/* workLocation */}
//       </div>
//       <div className={classes.time}>{job.datePublished}</div>
//       <div className={classes.tags}>
//         <Tag tag="React" />
//         <Tag tag="React" />
//         <Tag tag="React" />
//       </div>
//       <div className={classes.starting__time}>Starting May 2022</div>
//     </div>
//   );
// };
