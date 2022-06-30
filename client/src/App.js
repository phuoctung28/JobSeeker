import "./App.css";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./containers/Home";
import { Login } from "./containers/Login";
import { JobPage } from "./containers/Job";
import { CompanyPage } from "./containers/Company";
import { JobDetail } from "./containers/JobDetail";
import { NotFound } from "./containers/NotFound";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import ProtectedRoutes from "./components/PrivateRoute";
import { AuthState } from "./context/AuthState";
import { Application } from "./containers/Application";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthState>
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoutes />}>
              <Route index element={<Homepage />} />
              <Route path="job">
                <Route index element={<JobPage />} />
                <Route path=":jobId" element={<JobDetail />} />
              </Route>
              <Route path="company" element={<CompanyPage />} />
              <Route path="application" element={<Application />} />
            </Route>
          </Routes>
          <Footer />
        </AuthState>
      </BrowserRouter>
    </>
  );
}
export default App;
