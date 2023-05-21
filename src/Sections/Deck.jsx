import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Section.css";
import { Card } from "./Card";
import { CreateCardPopUp } from "./CreateCardPopUp";
import { useDeck } from "./useDeck";

export function Deck(props) {
  const { popUpAction, openPopUp , navigateToCard, createCard} = useDeck()

  const cards = props.data.map((card) => (
    <div>
      <Card card={card} id={card.card_id} data={props.data} navigateToCard={navigateToCard} />
    </div>
  ));

  return (
    <>
      <div className={`section-div ${openPopUp && "blur"}`}>
        <h1 className ="section-title">
          Learning Deck
          <FontAwesomeIcon icon={faPlusSquare} onClick={popUpAction} />
        </h1>
        <div className="deck-row">{cards}</div>
      </div>
       {openPopUp && <CreateCardPopUp handleClick={popUpAction} createCard={createCard}/>}
      {props.sidebar}
    </>
  );
}
