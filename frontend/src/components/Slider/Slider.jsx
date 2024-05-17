import "./Slider.css";

import videoreview from "../../images/review/videoreview.mp4";
import videoreview2 from "../../images/review/videoreview2.mp4";
import reviewOne from "../../images/review/reviewOne.jpg";
import reviewOn from "../../images/review/reviewOn.jpg";
import reviewOnee from "../../images/review/reviewOnee.jpg";
import reviewT from "../../images/review/reviewT.jpg";
import common from "../../images/review/common.jpg";
import alina from "../../images/review/alina.jpg";
import ali from "../../images/review/ali.jpg";
import mari from "../../images/review/mari.jpg";
import rew from "../../images/review/rew.jpg";


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
              <img className="slider__img" src={reviewOne} alt="1" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={reviewOn} alt="1" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={reviewOnee} alt="1" />
            </div>

           

            <div className="swiper-slide">
              <img className="slider__img" src={reviewT} alt="2" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={common} alt="3" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={alina} alt="4" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={ali} alt="4" />
            </div>
            <div className="swiper-slide">
              <img className="slider__img" src={rew} alt="5" />
            </div>
            <div className="swiper-slide">
              <video className="slider__img slider__video" controlsList="nofullscreen" src={videoreview} controls playsInline ></video>
            </div>
            <div className="swiper-slide">
              <video className="slider__img slider__video" controlsList="nofullscreen" src={videoreview2} controls playsInline loading="lazy" preload="metadata"></video>
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

   <div className="swiper-slide">
            <iframe className="slider__img slider__video" src={videoreview} frameborder="0" title="видеотзыв" allowFullScreen="false" loading="lazy" ></iframe>
            </div>
}*/