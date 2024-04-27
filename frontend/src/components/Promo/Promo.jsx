import '../Promo/Promo.css';
import promo from '../../images/promo.JPG';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__content'>
        <div className='promo__info'>
          <h1 className='promo__title'>Дарья Литуева</h1>
          <p className='promo__paragraph'>Врач - нутрициолог</p>
          <p className='promo__paragraph'>Health - ментор</p>
          <a href="https://t.me/litueva_life" className="promo__link link" target="_blank" rel='noreferrer'>Записаться</a>
        </div>
          <img className='promo__img' src={promo} alt='мое фото' />
      </div>
    </section>
  );
}