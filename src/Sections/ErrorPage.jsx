import React from "react";

export function ErrorPage(props) {
  return (
    <>
      <div className="section-div">
        <h1 className="section-title">Error</h1>
        <p className="section-text">This link is not valid</p>
      </div>
      {props.sidebar}
    </>
  );
}
