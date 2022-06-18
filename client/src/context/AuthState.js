import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { AuthContext } from "./AuthContext";

export const AuthState = ({ children }) => {
  const [user, setUser] = useState(null);
  const [validation, setValidation] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser(userData)
        // ...
      } else {
        setUser(null)
        setValidation(false)
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, validation }}>{children}</AuthContext.Provider>
  );
};