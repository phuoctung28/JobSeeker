import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { deleteUser, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import checkFPTEmail from "../../utils/checkFPTEmail";
export const Login = () => {
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const [validation, setValidation] = useState(true);
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  auth.languageCode = "it";
  let navigate = useNavigate();
  const onSubmitOAuth2 = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (!checkFPTEmail(user.email)) {
          console.log("Fail");
          setValidation(false);
          navigate("/");
          deleteUser(user)
            .then(() => {
              // User deleted.
            })
            .catch((error) => {
              // An error ocurred
              // ...
            });
          throw new Error("Failllll");
        }
        return user;
      })
      .then((data) => {
        sessionStorage.setItem("uuid", data.uid);
        console.log(data);
        navigate("/home");
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
      setError("Your email has not permission to login");
    } else setError("");
  }, [error, validation]);
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
