import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ loggedIn }) {
  const location = useLocation();

  return (
    <nav className='navigation'>
      { loggedIn
      ? (
        <>
          <div className={ location.pathname === '/' ? 'navigation__content' : 'navigation__content'}>
            
            <Link to='/' className='navigation__account-link link'>Аккаунт</Link>
          </div>
        </>

      ) : (
        <div className='navigation__auth'>
          <Link to='/mystory' className='navigation__auth-item link'>Регистрация</Link>
          <Link to='/signin' className='navigation__auth-item navigation__auth-item_active'>Войти</Link>
        </div>
      )}

    </nav>
  )
}