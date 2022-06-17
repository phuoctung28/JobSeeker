import "./App.css";
import "./App.scss";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Homepage } from "./containers/Home";
import { Login } from "./containers/Login";
import { JobPage } from "./containers/Job";
import { CompanyPage } from "./containers/Company";
import { JobDetail } from "./containers/JobDetail";
import { Fragment, useEffect, useState } from "react";
import { NotFound } from "./containers/NotFound";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import PrivateRoute from "./components/PrivateRoute";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  }, []);
  return (
    <Fragment>
      <BrowserRouter>
        {isLoggedIn ? <Header /> : <></>}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute component={Homepage} isLoggedIn={isLoggedIn}/>} />
          <Route path="/job" element={<PrivateRoute component={JobPage} isLoggedIn={isLoggedIn}/>} />
          <Route
            path="/job/jobDetail"
            element={<PrivateRoute component={JobDetail} isLoggedIn={isLoggedIn}/>}
          />
          <Route
            path="/company"
            element={<PrivateRoute component={CompanyPage} isLoggedIn={isLoggedIn}/>}
          />
        </Routes>
        {isLoggedIn ? <Footer /> : <></>}
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
