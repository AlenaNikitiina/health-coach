import '../MyStory/MyStory.css';
import '../MyStoryN/MyStoryN.css';
import comb from '../../images/comb.PNG';
import back from '../../images/back.jpg';
import lemons from '../../images/lemons.jpg';


export default function MyStoryN () {
  return (
    <section className='MyStoryN'>
      <div className='MyStory__content'>

        <div className='MyStoryN__text'>
          <p className='MyStory__parag'>Но ничего не получалось. Я думаю это каждому знакомо? Получилось только тогда, когда я поставила себя на первое место, оказалась там, где хотела быть, уволилась с той работы, где себя больше не видела и маленькими шагами шла к заветной цели. Худела, набиралась опыта, читала, училась у разных преподавателей и в итоге достигла своей цели. А результат смотрите сами.</p>
          <div className='MyStoryN__img'>
            <img src={comb} className='MyStory__img' alt="" />
            <img src={back} className='MyStory__img' alt="" />
          </div>

          <p className='MyStory__parag'>Работая со мной вы получите неоценимый опыт, знания и поддержку. Я постараюсь дать вам всё необходимое, чтобы быть счастливыми и достигать поставленных целей. И не только в вопросах веса!</p>
          
        </div>
      
    </div>
    </section>
  )
}

