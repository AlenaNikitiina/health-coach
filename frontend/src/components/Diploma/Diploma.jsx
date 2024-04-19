import './Diploma.css';
import lemons from '../../images/lemons.jpg';

export default function Diploma () {
  return (
    <section className='diploma' aria-label="всплывающее окно с картинкой">
      <div className='diploma__content'>
        <h2 className='diploma__heading'>Мои дипломы</h2>
        <ul className='diploma__list link'>
          <li>
            <img className='diploma__photo' src={lemons} alt="диплом о медицинском образовании" />
          </li>
          <li>
            <img className='diploma__photo'src={lemons} alt="диплом об образовании психолога" />
          </li>
          <li>
            <img className='diploma__photo'src={lemons} alt="диплом о завершении ординатуры" />
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
