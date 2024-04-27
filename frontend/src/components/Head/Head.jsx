import '../Header/Header.css';
import '../Head/Head.css';
import { Link } from 'react-router-dom';

export default function Head () {

  return (
    <header className="head">
      <section className="header__content">
        <Link to='/' className='header__button button'>На главную</Link>
      </section>
    </header>
  )
};