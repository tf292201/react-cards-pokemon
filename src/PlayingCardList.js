import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, fetchCard] = useAxios();
console.log(cards);


  const addCard = async () => {
    fetchCard(`https://deckofcardsapi.com/api/deck/`,
    `new/draw/?count=1`);
  }

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.code} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
