import './Footer.css';
import telegram from "../../images/telegram.svg";
import vk from "../../images/vk.svg";

export default function Footer () {
  return (
    <footer className="footer">
      <div className='footer__content'>

        <div className="footer__copyright">
          <a href='https://github.com/AlenaNikitiina' className="footer__author link">© {(new Date()).getFullYear()} Alena Nikitina</a>
        </div>

        <nav className="footer__nav">
          <h3 className="footer__nav-heading">Мои Соцсети :</h3>
          <ul className="footer__nav-links">
            <li>
              <a href="tg://resolve?domain=litueva_life" className="footer__nav-link link" target="blank">
                <img className="footer__social-icon" src={vk} alt="Вконтакте"/>Vkontakte</a>
            </li>
            <li>
              <a href="tg://resolve?domain=litueva_life" className="footer__nav-link link" target="blank">
                <img className="footer__social-icon" src={telegram} alt="Телеграм"/>Telegram</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
