import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import { deleteUser, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import checkFPTEmail from "../../utils/checkFPTEmail";
import { AuthContext } from "../../context/AuthContext";
export const Login = () => {
  const provider = new GoogleAuthProvider();
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const { user, validation, setValidation } = useContext(AuthContext);
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  auth.languageCode = "it";
  let location = useLocation();
  // console.log(location);
  const onSubmitOAuth2 = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const userData = result.user;
        if (!checkFPTEmail(userData.email)) {
          deleteUser(userData)
            .then(() => {
              setValidation(false);
            })
            .catch((error) => {
              // An error ocurred
              // ...
            });
          throw new Error("Failllll");
        }
      })
      .then(() => {
        let from = location.state?.from?.pathname || "/";
        navigate(from);
        console.log(from);
      })
      .catch((err) => {
        // Handle Errors here.
        const errorCode = err.code;
        const errorMessage = err.message;
        // The email of the user's account used.
        const email = err.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(err);
        // ...
      });
  };
  useEffect(() => {
    if (validation === false) {
      setError("Your email has not permission");
    } else setError("");
  }, [validation]);
  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center align-items-center bg-image "
      style={{
        backgroundImage: "url(/bg-img.png)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="col-md-4 px-0">
        <img
          src="https://career-hcmuni.fpt.edu.vn/images/logo-fpt-login.png"
          alt=""
          className="img-fluid max-w "
        />
      </div>

      <div className="bg-white text-center mb-5">
        <p className="word-break">
          Let's build an outstanding profile and get the opportunity of business
          ideals
        </p>
      </div>
      <p className="text-danger">{error}</p>
      <div className="d-flex w-100 justify-content-center my-5">
        <form className="w-25">
          <Button
            className="shadow bg-white rounded d-flex mt-4"
            fullWidth
            onClick={onSubmitOAuth2}
          >
            <img
              className="ratio-4x3"
              src="https://img.icons8.com/color/32/000000/google-logo.png"
              alt="google"
            />{" "}
            <p className="mx-auto my-auto text-black font-weight-bold">
              Login with Google
            </p>
          </Button>
        </form>
      </div>
      <div className="mt-5">
        <p className="text-black opacity-25 text-center">
          Copyright ©2022 Produced by FPT Technology Department
        </p>
      </div>
    </div>
  );
};
