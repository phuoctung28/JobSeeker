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

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthState>
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/job" element={<JobPage />} />
              <Route path="/job/jobDetail" element={<JobDetail />} />
              <Route path="/company" element={<CompanyPage />} />
            </Route>
          </Routes>
          <Footer />
        </AuthState>
      </BrowserRouter>
    </>
  );
}
export default App;
