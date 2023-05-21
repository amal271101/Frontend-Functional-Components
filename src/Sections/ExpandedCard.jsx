import {
  faAngleDoubleRight,
  faEdit,
  faTrashAlt,
  faCaretSquareLeft,
  faCaretSquareRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { DeleteConfirmationPopUp } from "./DeleteConfirmationPopUp";
import { CardDetails } from "./CardDetails";
import { useCardActions } from "./useCardActions";

export function ExpandedCard(props) {
  let { id } = useParams();
  let intId = parseInt(id);
 const index = props.data.findIndex(item => item.card_id === intId);
 const location = useLocation();
 const key = location.key || "default";
console.log(id);
console.log(index);
 const {isArrowClicked , openEditPopUp, openDeletePopUp,handleArrowclick ,handleClick,handleClickEdit,handleClickDelete,closeBoth, deleteItem, updateCard, getCard,cardData } = useCardActions(index,props.data,id)

  return (
    <>
      <div className={"section-div"} key={key}>
        {isArrowClicked && (
          <div
            className={(openEditPopUp || openDeletePopUp) && "blur-no-fixation"}
            style={{
              float: "left",
              margin: "2%",
              marginTop: "2%",
              marginLeft: "1%",
              width: "50%",
            }}
          >
            <FontAwesomeIcon
              icon={faEdit}
              style={{
                fontSize: "1.5em",
                marginRight: "5%",
              }}
              onClick={handleClickEdit}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              style={{
                fontSize: "1.5em",
              }}
              onClick={handleClickDelete}
            />
          </div>
        )}
        <span
          className={(openEditPopUp || openDeletePopUp) && "blur-no-fixation"}
        >
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            style={{
              fontSize: "1.5em",
              float: "right",
              marginRight: "7%",
              marginTop: "2%",
            }}
            onClick={handleClick}
          />
        </span>
        <div
          className={`centeredDiv centeredDivExpandedCard `}
        >
          <CardDetails
            card={props.data[index]}
            id={id}
            expandedCard={true}
            openEditPopUp={openEditPopUp}
            handleClickEdit={handleClickEdit}
            className={
              (openEditPopUp || openDeletePopUp) && "blur-no-fixation"
            }
            updateCard={updateCard}
            getCard={getCard}
            cardData={cardData}
          />
        </div>
        <div
          className={`section-bottom ${
            openEditPopUp || (openDeletePopUp && "blur-no-fixation")
          }`}
        >
          { props.data[index - 1] ? (
            <FontAwesomeIcon
              icon={faCaretSquareLeft}
              style={{ fontSize: "4em" }}
              onClick={() => handleArrowclick(false)}
            />
          ) : null}
          {!(index+1 === props.data.length) ? (
            <FontAwesomeIcon
              icon={faCaretSquareRight}
              style={{ fontSize: "4em", float: "right", marginRight: "2%" }}
              onClick={() => handleArrowclick(true)}     
            />
          ) : null}
        </div>
      </div>
   
      {openDeletePopUp && !openEditPopUp && (
        <DeleteConfirmationPopUp handleClick={handleClickDelete} deleteItem={deleteItem} setData={props.setData} data={props.data} id={id} />
      )}
      {(openDeletePopUp&&openEditPopUp) && closeBoth() } 

    </>
  );
}
