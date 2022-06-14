import "./App.css";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./containers/Home";
import { Login } from "./containers/Login";
import { JobPage } from "./containers/Job";
import { CompanyPage } from "./containers/Company";
import { JobDetail } from "./containers/JobDetail";
import { useEffect } from "react";
function App() {
  return (
    <div className="vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/job/jobDetail" element={<JobDetail />} />
          <Route path="/company" element={<CompanyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
