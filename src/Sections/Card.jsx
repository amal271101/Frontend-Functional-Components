import React from "react";
import { CardContent } from "./CardContent";

export function Card(props) {
  return (
    <div class="column">
        <CardContent card={props.card} id={props.card_id} data={props.data} navigateToCard={props.navigateToCard}/>
    </div>
  );
}
