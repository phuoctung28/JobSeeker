import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import classes from "./Footer.module.scss";
export const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {!!user ? (
        <footer className={classes.footer}>
          <div className="container">
            <div>
              <img src="/logo-fpt-login.png" width={339} height={75} alt="" />
            </div>
            <hr />
            <div className={classes.information}>
              <div>Copyright ©2022 Produced by FPT Technology Department</div>
              <div>
                <p>Privacy policy</p>
                <p>Terms of Service </p>
                <p>Security & Privacy</p>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <></>
      )}
    </>
  );
};
