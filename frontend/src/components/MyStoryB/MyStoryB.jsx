import '../MyStory/MyStory.css';
import './MyStoryB.css';
import fa from '../../images/fa.JPG';
import fafa from '../../images/fafa.JPG';

export default function MyStoryB () {
  return (
    <section className='MyStoryB'>
      <div className='MyStory__content'>

      <div className='MyStoryB__text'>
          <div>
            <p className='MyStory__parag'>В конечном итоге, начав работать врачом и повесив на себя тяжелую ответственность, я увидела на весах свою первую трехзначную цифру. Но в какой-то момент уже похудеть по старым шаблонам не могла. И продолжала набирать вес, сотрудничая каждый день  с чувством вины и стыда, работая суточными сменами, выпивая алкоголь, заедая злость и разочарование.</p>
            <p className='MyStory__parag'>К 2022г. я весила 107-112 кг. И то приблизительно, потому что с весами я дружить, разумеется, не хотела. Мне было тяжело долго ходить, я страдала от одышки, не могла купить себе одежду в знакомых раньше брендах, избегала зеркал, летом не любила носить юбки и платья (мои соотечественники поймут почему?) и постоянно думала, что когда-нибудь я смогу взять себя в руки, найму очередного тренера по питанию и у меня все получится</p>
          </div>
          <div className='MyStoryA__photo'>
            <img src={fa} className='MyStory__img' alt="" />
            <img src={fafa} className='MyStory__img' alt="" />
          </div>
        </div>
      
    </div>
    </section>
  )
}