import '../Gallery/Gallery.css';

import meme from '../../images/IMG_5059.JPG';
import prom from '../../images/IMG_5069.JPG';
import study from '../../images/IMG_5274.JPG';
import st from '../../images/IMG_5269.JPG';
import r from '../../images/IMG_5223.JPG';
import u from '../../images/IMG_5205.JPG';
import w from '../../images/IMG_5415.JPG';

export default function Gallery () {

  return (
    <section className="gallery">
      <figure class="gallery__item"><img src={u} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={prom} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={w} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={meme} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={r} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={st} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={study} alt="" class="gallery__image" /></figure>
    </section>
  );
}