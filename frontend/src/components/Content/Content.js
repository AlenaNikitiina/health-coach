import { Slider } from '../Slider/Slider';
import './Content.css';

import a from '../../images/IMG_5059.JPG';
import b from '../../images/IMG_5069.JPG';
import c from '../../images/IMG_5274.JPG';
import d from '../../images/IMG_5269.JPG';

export const Content = () => {

  return (
    <div className='content'>
      <Slider>
        <img src={a} alt="1" />
        <img src={b} alt="2" />
        <img src={d} alt="4" />
        <img src={c} alt="3" />
        <img src={d} alt="4" />
        <img src={a} alt="1" />
      </Slider>
    </div>
  );
}