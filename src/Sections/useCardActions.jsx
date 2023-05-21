import { useState } from "react";
import { useNavigate } from "react-router-dom";

//axios.defaults.baseURL = "http://localhost:8080/api";

export const useCardActions = (index, data, id) => {
  let navigate = useNavigate();

  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [openEditPopUp, setOpenEditPopUp] = useState(false);
  const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
  const [cardData, setCardData] = useState({});

  function handleArrowclick(right) {
    navigate(
      `/deck/${right ? data[index + 1].card_id : data[index - 1].card_id}`
    );
  }

  function handleClick() {
    setIsArrowClicked(!isArrowClicked);
  }

  function handleClickEdit() {
    setOpenEditPopUp(!openEditPopUp);
  }

  function handleClickDelete() {
    setOpenDeletePopUp(!openDeletePopUp);
  }

  function closeBoth() {
    setOpenDeletePopUp(!openDeletePopUp);
    setOpenEditPopUp(!openEditPopUp);
  }

  const [openPopUp, setOpenPopUp] = useState(false);

  function popUpAction() {
    setOpenPopUp(!openPopUp);
  }

  function navigateToCard(cardId) {
    navigate(`/deck/${cardId}`);
  }

  function getCard(cardId){
    fetch(`http://127.0.0.1:8085/deck/${cardId}`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((card) => setCardData(card))
      .catch((error) => navigate(`/error`));

  }

  function deleteItem(cardId) {
    fetch("http://127.0.0.1:8085/deck/" + cardId, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    navigate(`/deck`);
  }


  function updateCard(cardId,question, answer) {
    fetch("http://127.0.0.1:8085/deck/+"+ cardId, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ question: question, answer: answer }),
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));

      console.log("updated card")
      getCard(cardId);
  }

  

  return {
    isArrowClicked,
    openEditPopUp,
    openDeletePopUp,
    handleArrowclick,
    handleClick,
    handleClickEdit,
    handleClickDelete,
    closeBoth,
    popUpAction,
    navigateToCard,
    deleteItem,
    updateCard,
    getCard,
    cardData
  };
};
