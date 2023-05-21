import React from "react";
import "./FormInputComponent.css"
export function FormInputComponent(props) {
    return (
          <input type={props.inputType} name={props.inputName} placeholder={props.labelName} className={"input-style"} onChange={props.onChange} defaultValue={props.value}/>
    )
}