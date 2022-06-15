import "./App.css";
import "./App.scss";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Homepage } from "./containers/Home";
import { Login } from "./containers/Login";
import { JobPage } from "./containers/Job";
import { CompanyPage } from "./containers/Company";
import { JobDetail } from "./containers/JobDetail";
import { Fragment, useEffect } from "react";
import { Profile } from "./containers/Profile";
import { NotFound } from "./containers/NotFound";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  // let uid = "";
  // useEffect(() => {
  //   uid = sessionStorage.getItem("uuid");
  // }, []);
  return (
    <Fragment>
      {/* {uid ? <></> : <Header />} */}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute component={Homepage} />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/job/jobDetail" element={<JobDetail />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      {/* {uid ? <></> : <Footer />} */}
    </Fragment>
  );
}
export default App;
