import './Diploma.css';
import eda from '../../images/eda.JPG';

export default function Diploma () {
  return (
    <section className='diploma popup popup_type_images splide' id="splide_place_gallery-popup" aria-label="всплывающее окно с картинкой">
      <div className='diploma__content popup__container-images'>
        <h2 className='diploma__heading'>Мои дипломы</h2>
        <ul className='diploma__docs link'>
          <li>
            <img className='diploma__photo' src={eda} alt="медицинсоке образование" />
          </li>
          <li>
            <img className='diploma__photo'src={eda} alt="курс нутрициолога" />
          </li>
          <li>
            <img className='diploma__photo'src={eda} alt="курс нутрициолога" />
          </li>
        </ul>
      </div>
    </section>
  )
};
