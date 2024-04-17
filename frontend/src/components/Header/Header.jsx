// import { Route, Routes, Link } from "react-router-dom";
import '../Header/Header.css';

export default function Header () {

  return (
    <header className="header">
      <section className="header__content">
        <a className='header__button button' href="#price">Тарифы</a>
        <a className='header__button button' href="#">Отзывы</a>
      </section>
    </header>
  );
}
