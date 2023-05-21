import React from "react";
import "./Section.css";
export function Impressum(props) {
  return (
    <>
     <>
    <div className="section-div">
      <h1 className="section-title">Impressum</h1>
      <p  className="section-text">
        This Webapp was created by Amal Mostafa for her Bachelor Thesis that compares class components with functional components in React.js.
      </p>
    </div>
  </>
    {props.sidebar}
  </>
  );
}
