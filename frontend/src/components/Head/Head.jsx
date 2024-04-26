import '../Header/Header.css';
import { NavLink } from 'react-router-dom';

export default function Head () {

  return (
    <header className="header">
      <section className="header__content">
        <NavLink to='/' className='header__button button'>На главную</NavLink>
      </section>
    </header>
  )
};