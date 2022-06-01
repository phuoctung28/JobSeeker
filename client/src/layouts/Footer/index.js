import React from "react";
import "./index.css"
export const Footer = () => {
  return (
    <div className="bg-black py-5 text-footer">
      <div className="container">
        <div>
          <img src="/logo-fpt-login.png" width={339} height={75} alt="" />
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div>Copyright ©2022 Produced by FPT Technology Department</div>
          <div className="d-flex">
            <p className=" space-x-2">Privacy policy</p>
            <p className=" space-x-2">Terms of Service </p>
            <p className=" space-x-2">Security & Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
