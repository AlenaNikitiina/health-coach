import './Diploma.css';
import Card from '../Card/Card.jsx'
import coach from '../../images/coach.jpg';
import psyho from '../../images/psyho.jpg';
import doctor from '../../images/doctor.jpg';
import moniki from '../../images/moniki.jpg';
import nutri from '../../images/nutri.jpg';


class Photo {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
}

//const photos = [coach, psyho, doctor, moniki, nutri];
const photos = [
  new Photo("курс ментора", coach),
  new Photo("диплом об образовании психолога", psyho),
  new Photo("диплом о завершении ординатуры", doctor),
  new Photo("курс нутрициолога",nutri),
  new Photo("диплом о завершении ординатуры", moniki),
];

function closePopup () {
}

/*
function onCardClick() {
  console.log("onCardClick()");
}
*/

export default function Diploma ( {onCardClick}) {
  return (
    <section className='diploma' aria-label="всплывающее окно с картинкой">
      <div className='diploma__content'>
        <h2 className='diploma__heading'>Мои дипломы</h2>

        <ul className='diploma__list link'>
          {photos.map(card => {
              return (
                <Card
                  card={card}
                  name={card.name}
                  link={card.link}
                  onCardClick={onCardClick}
                />)
            })}
        </ul>
      </div>
    </section>
  )
};

/*
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
*/