import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CardContent } from "./CardContent";
import { CreateCardPopUp } from "./CreateCardPopUp";
import { useNavigate } from "react-router-dom";
export function CardDetails(props) {

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      props.getCard(id);
    }, 100);
    return () => clearInterval(interval);
  }, [id]);

  !props.cardData && navigate(`/error`);

  return (
    <>
      <CardContent
        card={props.cardData}
        expandedCard={true}
        className={props.className}
      />
      {props.openEditPopUp && (
        <CreateCardPopUp
          question={props.cardData.question}
          answer={props.cardData.answer}
          handleClick={props.handleClickEdit}
          updateCard={props.updateCard}
          id={props.id}
        />
      )}
    </>
  );
}
