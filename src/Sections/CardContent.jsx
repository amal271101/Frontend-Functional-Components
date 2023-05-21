import { faExchange, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

export function CardContent(props) {
  const [isCardTurned, setIsCardTurned] = useState(false);

  function handleClickFlip() {
    setIsCardTurned(!isCardTurned);
  }

  return (
    <div
      className={`card ${props.className}`}
      onClick={props.expandedCard && handleClickFlip}
      contentEditable={props.editable}
    >
      {!props.expandedCard && (
        <FontAwesomeIcon
          icon={faExpand}
          onClick={() => props.navigateToCard(props.card?.card_id)}
        />
      )}

      {!isCardTurned ? (
        <p>{props.card.question}</p>
      ) : (
        <p>{props.card.answer}</p>
      )}
      {!props.expandedCard && (
        <FontAwesomeIcon icon={faExchange} onClick={handleClickFlip} />
      )}
    </div>
  );
}
