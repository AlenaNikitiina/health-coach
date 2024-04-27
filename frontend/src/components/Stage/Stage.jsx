import '../Stage/Stage.css';
import salad from '../../images/salad.jpg';
import lemons from '../../images/withlemons.jpg';

export default function Stage() {
  return (
    <section id='stage' className='stage'>
      <h2 className='stage__heading'>Этапы работы</h2>
      <div className='stage__content'>

        <article className='stage__text'>
          <img className='stage__imgfirst' src={salad} alt='девушка держит салад' />
          <div className='stage__listfirst'>
            <h3 className='stage__subtitle'>(1)&nbsp;Знакомство</h3>
            <p className='stage__paragraph'>Вы заполняете анкету, чтобы я могла лучше вас узнать. Если ваш запрос входит в мою компетенцию, то мы договариваемся о дате и времени первичной консультации.</p>
            <p className='stage__paragraph'>Первичная консультация - 20 минут, она бесплатная. Время для того, чтобы познакомиться и понять подходим ли мы друг другу. Я тезисно рассказываю о моей работе исходя из ваших запросов и если мы понимаем, что нас всё устраивает, то работаем дальше и выбираем дальнейший путь.</p>
          </div>
        </article>

        <article className='stage__text'>
          <img className='stage__imgsecond' src={lemons} alt='девушка держит лимоны' />
          <div className='stage__listsecond'>
            <h3 className='stage__subtitle'>(2)&nbsp;Анализ вашего состояния</h3>
            <p className='stage__paragraph'>Совместно мы проведем анализ вашего текущего состояния и в зависимости от ваших запросов мы выбираем 3 пути. Это консультативная помощь, групповое ведение или индивидуальное сопровождение.</p>
            <p className='stage__paragraph'>Я не даю консультации тем, у кого имеются тяжелые и среднетяжелые формы расстройства пищевого поведения. Это вопрос, который требует специализированной помощи врача психиатра и стационарного лечения. Я не работаю с беременными, детьми, женщинами на грудном вскармливании и профессиональными спортсменами.</p>
          </div>
        </article>
      </div>
    </section>
  )
}
