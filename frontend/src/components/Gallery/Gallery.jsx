import '../Gallery/Gallery.css';

import a from '../../images/IMG_5059.JPG';
import b from '../../images/IMG_5069.JPG';
import c from '../../images/IMG_5274.JPG';
import d from '../../images/IMG_5269.JPG';
import e from '../../images/IMG_5223.JPG';
import f from '../../images/IMG_5205.JPG';
import g from '../../images/IMG_5415.JPG';

export default function Gallery () {

  return (
    <section className="gallery">
      <figure class="gallery__item"><img src={f} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={b} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={g} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={a} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={e} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={d} alt="" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={c} alt="" class="gallery__image" /></figure>
    </section>
  );
}