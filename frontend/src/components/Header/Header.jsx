// import { Route, Routes, Link } from "react-router-dom";
import '../Header/Header.css';

export default function Header () {

  return (
    <header className="header">
      <section className="header__content">
        <a className='header__button button' href="#">Моя история</a>
        <a className='header__button button' href="#stage">Этапы работы</a>
        <a className='header__button button' href="#price">Услуги</a>
        <a className='header__button button' href="#">Отзывы</a>
      </section>
    </header>
  );
}
