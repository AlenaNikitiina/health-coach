import "./Slider.css";

import rew from "../../images/rew.jpg";
//import videoreview from "../../images/videoreview.mp4";
//import videoreview2 from "../../images/videoreview2.mp4";

import reviewOne from "../../images/reviewOne.jpg";
import reviewOn from "../../images/reviewOn.jpg";
import reviewOnee from "../../images/reviewOnee.jpg";
//import reviewtwo from "../../images/reviewtwo.jpg";
//import reviewTw from "../../images/reviewTw.jpg";
import reviewT from "../../images/reviewT.jpg";
import common from "../../images/common.jpg";
import alina from "../../images/alina.jpg";
import ali from "../../images/ali.jpg";
import mari from "../../images/mari.jpg";


export default function Slider () {

  return (
    <section id="reviews" className="slider">
      <div className="slider__content">
        <h2 className="slider__heading">Отзывы</h2>

        <div className="slider__navigation">
          <button className="slider__btn btnprev slider__btn-prev"></button>
          <div className="slider__pagination"></div>
          <button className="slider__btn btnnext slider__btn-next"></button>
        </div>


        <div className="swiper slider-swiper">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <img className="slider__img" src={mari} alt="1" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={reviewOne} alt="2" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={reviewOn} alt="4" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={reviewOnee} alt="3" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={reviewT} alt="1" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={common} alt="1" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={alina} alt="1" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={ali} alt="1" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={rew} alt="1" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

/*export default function Slider () {

  return (
    <section id="reviews" className="slider">
      <div className="slider__content">
        <h2 className="slider__heading">Отзывы</h2>

        <div className="slider__navigation">
          <button className="slider__btn btnprev slider__btn-prev"></button>
          <div className="slider__pagination"></div>
          <button className="slider__btn btnnext slider__btn-next"></button>
        </div>

        <div className="swiper slider-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a data-fslightbox="gallery" className="slider__link" href="image/reviewO.jpg">
                <img className="slider__img" src={reviewO} alt="1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}*/