import { useState } from "react";
import ImagePopup from './ImagePopup.js';

export default function App () {
  const [selectedCard, setSelectedCard] = useState (null);  // zoom при клике на фото

  // для zoom
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // закрытие на крестик
  function closeAllPopups () {
    setSelectedCard (null);
  }

   // закрытие на клик на оверлэй, вне формы
   function handleOverlayClick (evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  return (
    <ImagePopup
    card={selectedCard}
    isOpen={setSelectedCard}
    onClose={closeAllPopups}
    onOverlayClick={handleOverlayClick}

    onCardClick={handleCardClick} // zoom f
  />
  )
}