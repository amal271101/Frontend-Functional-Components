import React, { useState } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import {
  faUser,
  faFolderOpen,
  faEdit,
  faQuestionCircle,
  faInfo,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

//https://reactrouter.com/en/main/hooks/use-navigate
export function SideBar() {
  let navigate = useNavigate();

  function handleOnClick(section) {
    navigate(section);
  }

  /** <FontAwesomeIcon
            icon={faEdit}
            onClick={() => handleOnClick("/todo")}
          /> */
  return (
    <div>
      <div className="sidebar-container">
        <div className="sidebar">
          <FontAwesomeIcon
            icon={faUser}
            onClick={() => handleOnClick("/user")}
          />

          <FontAwesomeIcon
            icon={faFolderOpen}
            onClick={() => handleOnClick("/deck")}
          />

          <FontAwesomeIcon
            icon={faQuestionCircle}
            onClick={() => handleOnClick("/qna")}
          />
          <FontAwesomeIcon
            icon={faInfo}
            style={{
              marginLeft: "28px",
              fontSize: "25px",
            }}
            onClick={() => handleOnClick("/impressum")}
          />

          <FontAwesomeIcon
            icon={faSignOutAlt}
            style={{
              marginTop: "850%",
              fontSize: "25px",
              marginBottom: "0px",
            }}
            onClick={() => handleOnClick("/login")}
          />
        </div>
      </div>
    </div>
  );
}
