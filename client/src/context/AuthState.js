import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { AuthContext } from "./AuthContext";

export const AuthState = ({ children }) => {
  const [user, setUser] = useState(null);
  const [validation, setValidation] = useState(true);
  const [job, setJob] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        console.log("Loi o day auth state");
        setUser(userData);
        setValidation(true);
      } else {
        setUser(null);
      }
    });
  }, [user, validation]);

  return (
    <AuthContext.Provider value={{ user, validation, setValidation, job, setJob }}>
      {children}
    </AuthContext.Provider>
  );
};
