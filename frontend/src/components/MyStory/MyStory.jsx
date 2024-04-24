import '../MyStory/MyStory.css';
import meme from '../../images/meme.jpg';

export default function MyStory () {
  return (
    <section className='MyStory'>
      <div className='MyStory__content'>
        <h1 className='MyStory__heading'>Моя история</h1>

        <div className='MyStory__s'>
          <div className='MyStory__t'>
            <p className='MyStory__parag'> Я имею определенный багаж знаний и умений в области медицины, психологии и нутрициологии. Но с другой стороны-я обычный человек со своими страхами и вопросами. И самый главный вопрос-это здоровое отношение к жизни. Но к этому вопросу я шла весьма долго и интересно. Наверное.</p>
            <p className='MyStory__parag'>Итак, меня зовут Дарья. Я родилась в 1989 году в г. Ленинграде, в приемном покое роддома в центре города, на 33 неделе беременности. Мимо проходившая заведующая детской реанимацией со студентами подхватила меня из рук медсестры в смотровой и понеслась к детской реанимации. Попала я домой через 3 месяца, весьма здоровая и упитанная. Прям подарочек.</p>
          </div>
          <img src={meme} className='MyStory__img' alt="" />
        </div>

    </div>
    </section>
  )
}

