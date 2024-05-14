import './Header.css';
import { Link } from 'react-router-dom';

export default function Header () {

  return (
    <header className='header'>
      <section className="header__content">
        <Link to='/mystory' className='header__button button'>Моя история</Link>
        <a className='header__button button' href="#price">Услуги</a>
        <a className='header__button button' href="#reviews">Отзывы</a>
      </section>
    </header>
  );
}
