import './Diploma.css';
import lemons from '../../images/lemons.jpg';

export default function Diploma () {
  return (
    <section className='diploma popup popup_type_images splide' id="splide_place_gallery-popup" aria-label="всплывающее окно с картинкой">
      <div className='diploma__content popup__container-images'>
        <h2 className='diploma__heading'>Мои дипломы</h2>
        <ul className='diploma__docs link'>
          <li>
            <img className='diploma__photo' src={lemons} alt="медицинсоке образование" />
          </li>
          <li>
            <img className='diploma__photo'src={lemons} alt="курс нутрициолога" />
          </li>
          <li>
            <img className='diploma__photo'src={lemons} alt="курс нутрициолога" />
          </li>
        </ul>
      </div>
    </section>
  )
};
