import React, { Fragment, useContext, useEffect } from "react";
import { CategoryList } from "../../components/Card/Category/CategoryList";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import classes from "./Home.module.scss";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
import { loadAllJob } from "../../context/ActionCreator";
import { FeatureList } from "../../components/Card/Feature/FeatureList";
import { SearchInput } from "../../components/Search";
import { mockData } from "../../mockData";
export const Homepage = () => {
  const navigate = useNavigate();
  const { job, setJob } = useContext(AuthContext);
  async function handleSubmit(event) {
    event.preventDefault();
    navigate("/job", { replace: true });
  }
  // useEffect(() => {
  //   loadAllJob()
  //     .then((result) => {
  //       setJob(result.data);
  //       console.log(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Fragment>
      <div className={classes.header}>
        <div className="container">
          <div className={classes.panel}>
            <div className="mr-5">
              <h1>
                Discover Your<br></br>
                <strong className={classes.text}>Dream</strong> Job
              </h1>
              <div className="mt-5">
                <SearchInput />
  
              </div>
            </div>
            <img src="/bg.svg" width={576.03} height={357.19} alt="" />
          </div>
        </div>
      </div>
      <div className="my-5 container h-100">
        <div>
          <h4 className="my-4">Categories</h4>
          <CategoryList />
        </div>
        <div>
          <h4 className="my-4">Featured Jobs</h4>
          <FeatureList jobList={mockData} />
        </div>
      </div>
      <Button className={classes.btnJob} onClick={handleSubmit}>
        More jobs
      </Button>
    </Fragment>
  );
};
