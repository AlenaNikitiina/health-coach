import React from 'react';
import './App.css';
import { useState } from "react";
import ImagePopup from '../ImagePopup/ImagePopup.js';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer';
import Head from '../Head/Head.jsx';
import MyStory from '../MyStory/MyStory';
import MyStoryA from '../MyStoryA/MyStoryA.jsx';
import MyStoryB from '../MyStoryB/MyStoryB.jsx';
import MyStoryC from '../MyStoryC/MyStoryC.jsx';
import Gallery from '../Gallery/Gallery.jsx';

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
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Main />
            <Footer />

            <ImagePopup
              card={selectedCard}
              isOpen={setSelectedCard}
              onClose={closeAllPopups}
              onOverlayClick={handleOverlayClick}
              onCardClick={handleCardClick} // zoom f
            />
          </>
          }>
        </Route>

        <Route path='/mystory' element={
          <>
            <Head />
            <MyStory />
            <MyStoryA />
            <MyStoryB />
            <MyStoryC />
            <Gallery />
            <Footer />
          </>
          }>
        </Route>
      </Routes>
    </div>
  )
};

//<Route path='*' element={<NotFound />} />
