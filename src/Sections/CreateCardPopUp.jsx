import React from "react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormInputComponent } from "../SharedComponents/FormInput/FormInputComponent";
import { useState } from "react";
export function CreateCardPopUp(props) {
 
  const [question, setQuestion]= useState(props.question);
  const [answer, setAnswer]= useState(props.answer);
  function submitForm(){
    props.updateCard? props.updateCard(props.id,question, answer):
    props.createCard(question,answer);
    props.handleClick();
  }

  return (
    <div className="popup" >
      <h2 className="popup-title">
        <FontAwesomeIcon
          icon={faWindowClose}
          id="close-window"
          onClick={props.handleClick}
        />
      </h2>
      <form>
        Question
        <FormInputComponent inputName={"Question"} inputType={"text"} onChange={e => setQuestion(e.target.value)}           value={props.question&&question}

 />
        <br />
        Answer
        <FormInputComponent inputName={"Answer"} inputType={"text"} onChange={e => setAnswer(e.target.value)}           value={props.answer&&answer}
/>
      </form>
      <div className="popup-button-div">
        <button type="button" className="universal-button" onClick={submitForm}>
          Save
        </button>
        <button type="button" className="universal-button" onClick={props.handleClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}
