import React, { useState } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebase";
export const Login = () => {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  auth.languageCode = "it";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (data) => {
    setEmail(data);
  };
  const onChangePassword = (data) => {
    setPassword(data);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  const onSubmitOAuth2 = (e) => {
    signInWithRedirect(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="col-md-4 px-0">
        <img
          src="https://career-hcmuni.fpt.edu.vn/images/logo-fpt-login.png"
          alt=""
          className="img-fluid max-w "
        />
      </div>

      <div className="bg-white text-center mb-4">
        <p className="word-break">
          Let's build an outstanding profile and get the opportunity of business
          ideals
        </p>
      </div>
      <div className="d-flex w-100 justify-content-center">
        <div className="w-25">
          <Input
            placeholder="Enter your email"
            ariaLabel="Email"
            symbol={<i class="fa fa-user"></i>}
            onChangeHandler={onChangeEmail}
            value={email}
          />
          <Input
            placeholder="Enter your password"
            ariaLabel="Password"
            symbol={<i class="fa fa-lock"></i>}
            onChangeHandler={onChangePassword}
            value={password}
            type="password"
          />
          <Button
            buttonType="primary"
            fullWidth
            label="Sign in"
            className="text-center"
            onClick={onSubmitHandler}
          />
          <Button
            className="shadow bg-white rounded d-flex"
            fullWidth
            onClick={onSubmitOAuth2}
          >
            <img
              className="ratio-4x3"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="google"
            />{" "}
            <p className="mx-auto my-auto">Login with Google</p>
          </Button>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-black opacity-25 text-center">
          Copyright ©2022 Produced by FPT Technology Department
        </p>
      </div>
    </div>
  );
};
