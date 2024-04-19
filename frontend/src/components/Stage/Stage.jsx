import '../Stage/Stage.css';
import salad from '../../images/salad.jpg';
import lemons from '../../images/lemons.jpg';

export default function Stage() {
  return (
    <section id='stage' className='stage'>
      <h1 className='stage__heading'>Этапы работы</h1>
      <div className='stage__content'>

        <article className='stage__text'>
          <img className='stage__imgfirst' src={salad} alt='мое фото' />
          <div className='stage__listfirst'>
            <h2 className='stage__subtitle'>(1)&nbsp;Знакомство</h2>
            <p className='stage__paragraph'>Вы заполняете анкету, чтобы я могла лучше вас узнать. Если ваш запрос входит в мою компетенцию, то мы договариваемся о дате и времени первичной консультации.</p>
            <p className='stage__paragraph'>Первичная консультация - 20 минут, она бесплатная. Время для того, чтобы познакомиться и понять подходим ли мы друг другу. Я тезисно рассказываю о моей работе исходя из ваших запросов и если мы понимаем, что нас всё устраивает, то работаем дальше и выбираем дальнейший путь.</p>
          </div>
        </article>

        <article className='stage__text'>
          <img className='stage__imgsecond' src={lemons} alt='мое фото' />
          <div className='stage__listsecond'>
            <h2 className='stage__subtitle'>(2)&nbsp;Анализ вашего состояния</h2>
            <p className='stage__paragraph'>Совместно мы проведем анализ вашего текущего состояния и в зависимости от ваших запросов мы выбираем 3 пути. Это консультативная помощь, групповое ведение или индивидуальное сопровождение.</p>
            <p className='stage__paragraph'>Я не даю консультации тем, у кого имеются тяжелые и среднетяжелые формы расстройства пищевого поведения. Это вопрос, который требует специализированной помощи врача психиатра и стационарного лечения. Я не работаю с беременными, детьми, женщинами на грудном вскармливании и профессиональными спортсменами.</p>
          </div>
        </article>
      </div>
    </section>
  )
}



/*
<section id='stage' className='stage'>
      <div className='stage__content'>
      
        <h1 className='stage__heading'>Этапы работы</h1>

        <div className='stage__text'>
          <img className='stage__img' src={one} alt='мое фото' />
          <ul className='stage__list'>
            <li className='stage__item'>
              <h2 className='stage__subtitle'>(1)&nbsp;Знакомство</h2>
              <p className='stage__paragraph'>Вы заполняете анкету, чтобы я могла лучше вас узнать. Если ваш запрос входит в мою компетенцию, то мы договариваемся о дате и времени первичной консультации. Первичная консультация-20 минут, она бесплатная. Время для того, чтобы познакомиться и понять подходим ли мы друг другу. Я тезисно рассказываю о моей работе исходя из ваших запросов и если мы понимаем, что нас всё устраивает, то работаем дальше и выбираем дальнейший путь.</p>
            </li>
            <li className='stage__item'>
              <h2 className='stage__subtitle'>(2)&nbsp;Анализ вашего состояния</h2>
              <p className='stage__paragraph'>Совместно мы проведем анализ вашего текущего состояния и в зависимости от ваших запросов мы выбираем 3 пути: -консультативная помощь.-групповое ведение.-индивидуальное сопровождение.Я не даю консультации тем, у кого имеются тяжелые и среднетяжелые формы расстройства пищевого поведения. Это вопрос, который требует специализированной помощи врача психиатра и стационарного лечения. Я не работаю с беременными, детьми, женщинами на грудном вскармливании и профессиональными спортсменами.</p>
            </li>
          </ul>
          <img className='stage__img' src={two} alt='мое фото' />
        </div>
      
      </div>
    </section>*/