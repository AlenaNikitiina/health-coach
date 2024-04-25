import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Add from '../Add/Add';
import Stage from '../Stage/Stage';
import Warning from '../Warning/Warning';
import Consultation from '../Consultation/Consultation';
import Diploma from '../Diploma/Diploma';
import Quote from '../Quote/Quote';
import Gallery from '../Gallery/Gallery.jsx';

import MyStory from '../MyStory/MyStory';
import MyStoryA from '../MyStoryA/MyStoryA.jsx';
import MyStoryB from '../MyStoryB/MyStoryB.jsx';
import MyStoryC from '../MyStoryC/MyStoryC.jsx';
import './App.css';

import { useState } from "react";
import ImagePopup from '../ImagePopup/ImagePopup.js';

//import { Route, Routes } from 'react-router-dom';

export default function App() {
  const [selectedCard, setSelectedCard] = useState (null);  // zoom при клике на фото
  const [cards, setCards]               = useState([]); // для апи ssss

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
    <div className='app'>
      <Header />
      <Promo />
      <Quote />
      <AboutMe />
      <Diploma
        onCardClick={handleCardClick} // zoom f
        cards = {cards}
      />
      <Add />
      <Stage />
      <Consultation />
      <Warning />
      <Footer />
      <MyStory />
      <MyStoryA />
      <MyStoryB />
      <MyStoryC />
      <Gallery />
      <Footer />

      <ImagePopup
        card={selectedCard}
        isOpen={setSelectedCard}
        onClose={closeAllPopups}
        onOverlayClick={handleOverlayClick}
        onCardClick={handleCardClick} // zoom f
      />
      
    </div>
  )
}

