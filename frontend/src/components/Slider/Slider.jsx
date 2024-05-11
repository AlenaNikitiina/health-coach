import "./Slider.css";

//import review from "../../images/review.jpg";
import reviewOne from "../../images/reviewOne.jpg";
import reviewOn from "../../images/reviewOn.jpg";
import reviewO from "../../images/reviewO.jpg";
import reviewOnee from "../../images/reviewOnee.jpg";
import reviewtwo from "../../images/reviewtwo.jpg";
import reviewTw from "../../images/reviewTw.jpg";
import reviewT from "../../images/reviewT.jpg";

//id="reviews"
export default function Slider () {

  return (
    <section  className="slider">
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
                <img className="slider__img slider__link" src={reviewO} alt="1" />
            </div>

            <div className="swiper-slide">
                <img className="slider__img slider__link" src={reviewOne} alt="2" />
            </div>

            <div className="swiper-slide">
                <img className="slider__img slider__link" src={reviewOn} alt="4" />
            </div>

            <div className="swiper-slide">
                <img className="slider__img slider__link" src={reviewOnee} alt="3" />
            </div>

            <div className="swiper-slide">
              <img className="slider__img slider__link" src={reviewtwo} alt="4" />
            </div>

            <div className="swiper-slide">
                <img className="slider__img slider__link" src={reviewTw} alt="1" />
            </div>

            <div className="swiper-slide">
                <img className="slider__img slider__link" src={reviewT} alt="1" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

/*import "./Slider.css";

//import review from "../../images/review.jpg";
import reviewOne from "../../images/reviewOne.jpg";
import reviewOn from "../../images/reviewOn.jpg";
import reviewO from "../../images/reviewO.jpg";
import reviewOnee from "../../images/reviewOnee.jpg";
import reviewtwo from "../../images/reviewtwo.jpg";
import reviewTw from "../../images/reviewTw.jpg";
import reviewT from "../../images/reviewT.jpg";

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
              <a data-fslightbox="gallery" className="slider__link" href="image/reviewO.jpg">
                <img className="slider__img" src={reviewO} alt="1" />
              </a>
            </div>
            <div className="swiper-slide">
              <a data-fslightbox="gallery" className="slider__link" href="image/reviewOne.jpg">
                <img className="slider__img" src={reviewOne} alt="2" />
              </a>
            </div>
            <div className="swiper-slide">
              <a data-fslightbox="gallery" className="slider__link" href="images/reviewOn.jpg">
                <img className="slider__img" src={reviewOn} alt="4" />
              </a>
            </div>
            <div className="swiper-slide">
              <a data-fslightbox="gallery" className="slider__link" href="images/reviewOnee.jpg">
                <img className="slider__img" src={reviewOnee} alt="3" />
              </a>
            </div>
            <div className="swiper-slide">
              <a data-fslightbox="gallery" className="slider__link" href="images/reviewtwo.jpg">
              <img className="slider__img" src={reviewtwo} alt="4" />
              </a>
            </div>
            <div className="swiper-slide">
              <a data-fslightbox="gallery" className="slider__link" href="images/reviewTw.jpg">
                <img className="slider__img" src={reviewTw} alt="1" />
              </a>
            </div>
            <div className="swiper-slide">
              <a data-fslightbox="gallery" className="slider__link" href="images/reviewT.jpg">
                <img className="slider__img" src={reviewT} alt="1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}*/