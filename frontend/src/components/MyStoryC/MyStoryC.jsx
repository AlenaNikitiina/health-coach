import '../MyStory/MyStory.css';
import '../MyStoryC/MyStoryC.css';
import comb from '../../images/comb.PNG';

export default function MyStoryC () {
  return (
    <section className='myStoryC'>
      <div className='myStory__content'>
        <div className='myStory__blocks'>
          <img src={comb} className='myStory__img' alt="сравнение девушка на фото в 33 и 34 года" />
          <div className='myStory__text'>
            <p className='myStory__parag'>Но ничего не получалось. Я думаю это каждому знакомо? Получилось только тогда, когда я поставила себя на первое место, оказалась там, где хотела быть, уволилась с той работы, где себя больше не видела и маленькими шагами шла к заветной цели. Худела, набиралась опыта, читала, училась у разных преподавателей и в итоге достигла своей цели. А результат смотрите сами.</p>
            <p className='myStory__parag'>Работая со мной вы получите неоценимый опыт, знания и поддержку. Я постараюсь дать вам всё необходимое, чтобы быть счастливыми и достигать поставленных целей. И не только в вопросах веса!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/*import '../MyStory/MyStory.css';
import '../MyStoryC/MyStoryC.css';
import comb from '../../images/comb.PNG';
import back from '../../images/back.jpg';
//import lemons from '../../images/lemons.jpg';


export default function MyStoryC () {
  return (
    <section className='MyStoryC'>
      <div className='MyStory__content'>

        <div className='MyStoryC__text'>
          <p className='MyStory__parag'>Но ничего не получалось. Я думаю это каждому знакомо? Получилось только тогда, когда я поставила себя на первое место, оказалась там, где хотела быть, уволилась с той работы, где себя больше не видела и маленькими шагами шла к заветной цели. Худела, набиралась опыта, читала, училась у разных преподавателей и в итоге достигла своей цели. А результат смотрите сами.</p>
          <div className='MyStoryC__img'>
            <img src={comb} className='MyStory__img' alt="" />
            <img src={back} className='MyStory__img' alt="" />
          </div>

          <p className='MyStory__parag'>Работая со мной вы получите неоценимый опыт, знания и поддержку. Я постараюсь дать вам всё необходимое, чтобы быть счастливыми и достигать поставленных целей. И не только в вопросах веса!</p>
          
        </div>
      
    </div>
    </section>
  )
}*/
