import './Diploma.css';
//import lemons from '../../images/lemons.jpg';

import coach from '../../images/coach.jpg';
import psyho from '../../images/psyho.jpg';
import doctor from '../../images/doctor.jpg';
import moniki from '../../images/moniki.jpg';
import nutri from '../../images/nutri.jpg';

export default function Diploma () {
  return (
    <section className='diploma' aria-label="всплывающее окно с картинкой">
      <div className='diploma__content'>
        <h2 className='diploma__heading'>Мои дипломы</h2>

        <ul className='diploma__list link'>
          <li className='diploma__img'>
            <img className='diploma__photo' src={doctor} alt="диплом о медицинском образовании" />
          </li>
          <li className='diploma__img'>
            <img className='diploma__photo'src={psyho} alt="диплом об образовании психолога" />
          </li>
          <li className='diploma__img'>
            <img className='diploma__photo'src={moniki} alt="диплом о завершении ординатуры" />
          </li>
          <li className='diploma__img'>
            <img className='diploma__photo'src={coach} alt="курс ментора" />
          </li>
          <li className='diploma__img'>
            <img className='diploma__photo'src={nutri} alt="курс нутрициолога" />
          </li>
        </ul>
      </div>

      <div class='popup'>
      <span>&times;</span>
      <img src='nutri.jpg' alt="" />
    </div>
    
    </section>
  )
};
