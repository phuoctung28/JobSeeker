import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import JobAPI from "../services/job";
import { AuthContext } from "./AuthContext";

export const AuthState = ({ children }) => {
  const [user, setUser] = useState(null);
  const [validation, setValidation] = useState(true);
  const [job, setJob] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [cvFile, setcvFile] = useState(null);
  const [application, setApplication] = useState(null);
  const [applicant, setApplicant] = useState(null);
  // const [login, setLogin] = useState([]);
  useEffect(() => {
    const fetchApplicant = async (email) => {
      const { data } = await JobAPI.fetchApplicant(email);
      setApplicant(data);
    };
    const loadApplicant = async (email) => {
      // console.log(email);
      const { data } = await JobAPI.getApplication(email);
      setApplication(data[0]);
    };
    const checkApplicant = async (email) => {
      // console.log(email);
      await JobAPI.createApplicant(email);
    };
    const loadAllJob = async () => {
      const { data } = await JobAPI.loadJob();
      setJob(data);
    };
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        // console.log("Loi o day auth state");
        setUser(userData);
        setValidation(true);
        loadApplicant(userData.email);
        checkApplicant(userData.email);
        fetchApplicant(userData.email);
        loadAllJob();
      } else {
        setUser(null);
      }
    });
  }, [validation]);

  return (
    <AuthContext.Provider
      value={{
        cvFile,
        setcvFile,
        user,
        validation,
        setValidation,
        job,
        setJob,
        jobList,
        setJobList,
        application,
        applicant,
        setApplication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
