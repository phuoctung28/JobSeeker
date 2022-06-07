import "./App.css";
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./containers/Home";
import { Login } from "./containers/Login";
import { JobPage } from "./containers/Job";
import { CompanyPage } from "./containers/Company";
import { JobDetail } from "./containers/JobDetail";
function App() {
  return (
    <div className="vh-100">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/job/jobDetail" element={<JobDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
