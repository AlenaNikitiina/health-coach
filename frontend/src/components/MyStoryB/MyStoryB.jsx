import '../MyStory/MyStory.css';
import './MyStoryB.css';
import fa from '../../images/mystory/fa.JPG';
import fafa from '../../images/mystory/fafa.JPG';

export default function MyStoryB () {
  return (
    <section className='myStoryB'>
      <div className='myStory__content'>
      <div className='bluberry'></div>

      <div className='myStoryB__blocks'>
        <div className='myStoryB__text'>
          <p className='myStory__parag'>В конечном итоге, начав работать врачом и повесив на себя тяжелую ответственность, я увидела на весах свою первую трехзначную цифру. Но в какой-то момент уже похудеть по старым шаблонам не могла. И продолжала набирать вес, сотрудничая каждый день  с чувством вины и стыда, работая суточными сменами, выпивая алкоголь, заедая злость и разочарование.</p>
          <p className='myStory__parag'>К 2022г. я весила 107-112 кг. И то приблизительно, потому что с весами я дружить, разумеется, не хотела. Мне было тяжело долго ходить, я страдала от одышки, не могла купить себе одежду в знакомых раньше брендах, избегала зеркал, летом не любила носить юбки и платья (мои соотечественники поймут почему?) и постоянно думала, что когда-нибудь я смогу взять себя в руки, найму очередного тренера по питанию и у меня все получится.</p>
        </div>
        <div className='myStoryB__photo'>
          <img src={fa} className='myStoryB__img' alt="девушка сидит у фонтана" />
          <img src={fafa} className='myStoryB__img' alt="девушка сидит на празднике" />
        </div>
      </div>
      
    </div>
    </section>
  )
}