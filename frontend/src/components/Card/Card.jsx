import React from "react";
import './Card.css';

export default function Card ( {card, name, link, onCardClick } ) {

  // увеличить карточку, zoom
  function handleCardClickZoom() {
    onCardClick(card);
  }

  return (
    <div className="element-template">
      <li className="elements__card">

        <article className="element">
          <img
            className="element__foto"
            src={link}
            alt={`изображение: ${name}`}
            onClick={handleCardClickZoom}
          />
        </article>
      
      </li>
    </div>
  );
}

// это после ul
