import React from "react";
import "./Section.css";
export function QnA(props) {
  return (
    <>
    <div className="section-div">
      <h1 className="section-title">Questions and Answers</h1>
    </div>
    {props.sidebar}
  </>
  );
}
