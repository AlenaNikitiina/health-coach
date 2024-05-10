import '../Gallery/Gallery.css';
import a from '../../images/IMG_5059.jpg';
import b from '../../images/IMG_5069.jpg';
import c from '../../images/IMG_5274.jpg';
import d from '../../images/IMG_5269.jpg';
import e from '../../images/IMG_5223.JPG';
import f from '../../images/IMG_5205.JPG';
import g from '../../images/IMG_5415.jpg';

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