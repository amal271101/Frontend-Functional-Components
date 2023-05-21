import React from "react";
import "./Section.css";
export function ToDo(props) {
  return (
    <>
    <div className="section-div">
      <h1 className="section-title">To Do</h1>
    </div>
    {props.sidebar}
  </>
  );
}
