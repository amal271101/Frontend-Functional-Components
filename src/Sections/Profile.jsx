import React from "react";
import "./Section.css";
import profile from "../assets/images/profile.png";
import { FormInputComponent } from "../SharedComponents/FormInput/FormInputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export function Profile(props) {
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);

  function handleClick() {
    setIsEditButtonClicked(!isEditButtonClicked);
  }
  return (
    <>
      
      <div className="section-div profile ">
      <FontAwesomeIcon
          icon={faEdit}
          style={{
            fontSize: "1.5em",
            float: "right",
            marginRight: "7%",
            marginTop: "2%",
          }}
          onClick={handleClick}
        />
        <h1 className="section-title">Profile</h1>
        <div>
          <img src={profile} />
        </div>
        <div className="profile-form">
          <form>
            <FormInputComponent
              labelName={"First name"}
              inputName={"firstname"}
              inputType={"text"}
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
              labelName={"E-mail"}
              inputName={"E-mail"}
              inputType={"mail"}
            />
          </form>

          {isEditButtonClicked && (
            <div className="popup-button-div profile-buttons">
              <button type="button" className="universal-button">
              Save
              </button>
              "
              <button type="button" className="universal-button">
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      {props.sidebar}
    </>
  );
}
