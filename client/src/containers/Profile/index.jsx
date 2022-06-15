import React, { Fragment } from "react";
import classes from "./Profile.module.css";
import { Header } from "../../layouts/Header";
import { Banner } from "../../components/Banner";
import { AboutMe } from "../../components/InfoSection/AboutMeSection";
import { SkillSection } from "../../components/InfoSection/SkillSection";

export const Profile = () => {
  return (
    <Fragment>
      <div className={classes.header}></div>
      <Banner className={classes.Banner}></Banner>
      <div className={classes.mainContent}>
        <SkillSection></SkillSection>
        <AboutMe></AboutMe>
      </div>
    </Fragment>
  );
};
