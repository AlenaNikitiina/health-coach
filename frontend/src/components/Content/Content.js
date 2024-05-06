import './Content.css';
import { Slider } from '../Slider/Slider';

import review from '../../images/review.jpg';
import reviewOne from '../../images/reviewOne.jpg';
import reviewOn from '../../images/reviewOn.jpg';
import reviewO from '../../images/reviewO.jpg';
import reviewOnee from '../../images/reviewOnee.jpg';
import reviewtwo from '../../images/reviewtwo.jpg';
import reviewTw from '../../images/reviewTw.jpg';
import reviewT from '../../images/reviewT.jpg';

export const Content = () => {

  return (
    <section id='reviews' className='content'>
      <h2 className='content__heading'>Отзывы</h2>
      <div className='content__content'>
        <Slider>
          <img src={reviewO} alt="1" />
          <img src={reviewOne} alt="2" />
          <img src={reviewOn} alt="4" />
          <img src={review} alt="3" />
          <img src={reviewOnee} alt="3" />
          <img src={reviewtwo} alt="4" />
          <img src={reviewTw} alt="1" />
          <img src={reviewT} alt="1" />
        </Slider>
      </div>
    </section>
  );
}