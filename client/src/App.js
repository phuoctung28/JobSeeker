import "./App.css";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./containers/Home";
import { Login } from "./containers/Login";
import { JobPage } from "./containers/Job";
import { CompanyPage } from "./containers/Company";
import { JobDetail } from "./containers/JobDetail";
import { Fragment, useEffect } from "react";
import { Profile } from "./containers/Profile";
import { NotFound } from "./containers/NotFound";
import { Footer } from "./layouts/Footer";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/job/jobDetail" element={<JobDetail />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}
export default App;
