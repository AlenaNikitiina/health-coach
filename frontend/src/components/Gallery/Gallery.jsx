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
    <section className="galleryy">
      <figure class="gallery__item"><img src={f} alt="девушка держит зеленый смузи" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={b} alt="девушка сидит на рояле" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={g} alt="девушка сидит за столом и пишет в ежедневник" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={a} alt="девушка держит книгу кишечник и мозг" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={e} alt="книга лидерство в карьере" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={d} alt="фото ног в джинсах" class="gallery__image" /></figure>
      <figure class="gallery__item"><img src={c} alt="черника" class="gallery__image" /></figure>
    </section>
  );
}