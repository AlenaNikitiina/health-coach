/*import "./Slider.css";

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
*/


import "./Slider.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

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
    <div className="container">
    <h1 className="heading">Отзывы</h1>
    <Swiper
      
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      
      slidesPerView={3}
      
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src={mari} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={reviewOne} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={reviewOn} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={reviewOnee} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={reviewT} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={common} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <video className="slider__img slider__video" controlsList="nofullscreen" src={videoreview} controls playsInline ></video>
      </SwiperSlide>
      <SwiperSlide>
        <video className="slider__img slider__video" controlsList="nofullscreen" src={videoreview2} controls playsInline loading="lazy" preload="metadata"></video>
      </SwiperSlide>

      <SwiperSlide>
        <img src={alina} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ali} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={rew} alt="slide_image" />
      </SwiperSlide>
      

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  )
}

/*
<SwiperSlide>
<video className="slider__img slider__video" controlsList="nofullscreen" src={videoreview} controls playsInline ></video>
</SwiperSlide>
<SwiperSlide>
<video className="slider__img slider__video" controlsList="nofullscreen" src={videoreview2} controls playsInline loading="lazy" preload="metadata"></video>
</SwiperSlide>
*/