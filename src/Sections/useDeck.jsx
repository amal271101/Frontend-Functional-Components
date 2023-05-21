import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useDeck = () => {
    let navigate = useNavigate();
    const [openPopUp, setOpenPopUp] = useState(false);

    function popUpAction() {
      setOpenPopUp(!openPopUp);
    }

    function navigateToCard(cardId) {
      navigate(`/deck/${cardId}`);
    }
    function createCard(question, answer) {
        fetch("http://127.0.0.1:8085/deck/", {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify({ question: question, answer: answer }),
        })
          .then((res) => res.json())
          .catch((error) => console.error(error));
      }
    
  
  return { popUpAction , openPopUp, navigateToCard,createCard};
};