import React from "react";
import "./Authentication.css";
import { FormInputComponent } from "../SharedComponents/FormInput/FormInputComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmatione] = useState();
  const [errorMessage, setErrorMessage] = useState();

  let navigate = useNavigate();

  function sendRequest() {
    fetch("http://127.0.0.1:8085/signup", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        username: userName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
    navigate("/logIn");
  }
  function handleSubmit() {
    password === passwordConfirmation
      ? sendRequest()
      : setErrorMessage("Passwords do not match try again");
  }

  return (
    <div className="container">
      <div className="centeredDiv centeredDivRegister">
        <h1 className="authentication-title">Sign Up</h1>
        <form>
          <FormInputComponent
            labelName={"First name"}
            inputName={"firstname"}
            inputType={"text"}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <FormInputComponent
            labelName={"Last name"}
            inputName={"lastname"}
            inputType={"text"}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <FormInputComponent
            labelName={"Username"}
            inputName={"username"}
            inputType={"text"}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <FormInputComponent
            labelName={"Email"}
            inputName={"email"}
            inputType={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <FormInputComponent
            labelName={"Password"}
            inputName={"password"}
            inputType={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <FormInputComponent
            labelName={"Confirm Password"}
            inputName={"passwordconfirmation"}
            inputType={"password"}
            onChange={(e) => setPasswordConfirmatione(e.target.value)}
          />
        </form>
        <div className="button-div">
          <button
            type="button"
            className="register-button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
