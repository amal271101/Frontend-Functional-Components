import React from "react";
import "./Authentication.css";
import { FormInputComponent } from "../SharedComponents/FormInput/FormInputComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignUp() {

  let navigate = useNavigate();

  function handleSubmit() {
    navigate("/logIn");
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
          //  onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <FormInputComponent
            labelName={"Last name"}
            inputName={"lastname"}
            inputType={"text"}
          />
          <br />
          <FormInputComponent
            labelName={"Username"}
            inputName={"username"}
            inputType={"text"}
          />
          <br />
          <FormInputComponent
            labelName={"Email"}
            inputName={"email"}
            inputType={"email"}
          />
          <br />
          <FormInputComponent
            labelName={"Password"}
            inputName={"password"}
            inputType={"password"}
          />
          <br />
          <FormInputComponent
            labelName={"Confirm Password"}
            inputName={"passwordconfirmation"}
            inputType={"password"}
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
