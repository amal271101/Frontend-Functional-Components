import React from "react";
import "./Authentication.css";
import { FormInputComponent } from "../SharedComponents/FormInput/FormInputComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function LogIn() {
 //https://reactrouter.com/en/main/hooks/use-navigate
  let navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  function goToSignUpPage() {
    navigate("/signup");
  }

  function goToHomePage() {
    navigate("/deck");
  }


  function handleSubmit(){
    console.log(password);
    console.log(userName);
      fetch("http://127.0.0.1:8085/logIn", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.error(error));
    console.log("logged in");
    goToHomePage()

  }

  return (
    <div className="container">
      <div className="centeredDiv login-div">
        <h1 className="authentication-title">Log In</h1>
        <form>
          <FormInputComponent
            labelName={"Username"}
            inputName={"username"}
            inputType={"text"}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <FormInputComponent
            labelName={"Password"}
            inputName={"password"}
            inputType={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className="button-div">
          <button
            type="button"
            className="submit-button"
            onClick={handleSubmit}
          >
            Log In
          </button>
          <br />
          <button
            type="button"
            className="register-button"
            onClick={goToSignUpPage}
          >
            Sign Up

          </button>
        </div>
      </div>
    </div>
  );
}
