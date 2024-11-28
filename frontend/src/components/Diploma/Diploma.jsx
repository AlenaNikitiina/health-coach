import './Diploma.css';
import Card from '../Card/Card.jsx'
import coach from '../../images/coach.jpg';
import psyho from '../../images/psyho.jpg';
import doctor from '../../images/doctor.jpg';
import moniki from '../../images/moniki.jpg';
import nutri from '../../images/nutri.jpg';
import mentor from '../../images/mentor.JPG';

class Photo {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
}

const photos = [
  new Photo("диплом об образовании психолога", psyho),
  new Photo("диплом о завершении медицинского университета", doctor),
  new Photo("диплом нутрициолога",nutri),
  new Photo("диплом коуча", coach),
  new Photo("диплом о завершении ординатуры", moniki),
  new Photo("сертификат о прохождении курса по наставничеству", mentor),
];

function onCardClick() {
  console.log("onCardClick()");
}


export default function Diploma ( {onCardClick}) {
  return (
    <section className='diploma' aria-label="всплывающее окно с картинкой">
      <div className='diploma__content'>
        <h2 className='diploma__heading'>Мои дипломы</h2>

        <ul className='diploma__list'>
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
