import './AboutMe.css';
import eda from '../../images/eda.JPG';
import me from '../../images/me.jpg'

export default function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__content'>

        <article className='about-me__text'>
          <img className='about-me__img' src={eda} alt='девушка выбирает молоко' />
          <h2 className='about-me__title'>Обо мне</h2>
          <div>
            <p className='about-me__paragraph'>Но врач я лишь с одной стороны. С другой я — обычный человек. Со своими страхами и вопросами. И один из главных запросов — это Здоровое Отношение к Жизни. Как его создать, сохранить и преумножить. Я выступаю за осознанность в отношении себя и своей жизни. И хочу стать союзником для вас в таких темах, как: </p>
            <p className='about-me__paragraph'>Вопросы здорового образа жизни. Как к этому прийти, от чего оттолкнуться и на что опираться. И как преумножить свои знания в этой теме, если она уже вам знакома.</p>
            <p className='about-me__paragraph'>Вопросы лишнего веса. Почему вес не уходит, почему стоит. Как начать, успешно идти к заветной мечте и главное, как сохранить полученный результат.</p>
            <p className='about-me__paragraph'>Вопросы плохого самочувствия, когда «всё вроде бы хорошо, но по утрам встать сложно, а вечером не заснуть». Когда «разбитость и психосоматика» — ваше второе «я» и вы очень хотите это изменить.</p>
          </div>
        </article>

        <article className='about-me__text'>
          <img className='about-me__img' src={me} alt='девушка пишет в ежедневник' />
          <h2 className='about-me__title'>Образование</h2>
          <div>
            <p className='about-me__paragraph'>Как врач-нутрициолог, я обладаю уникальным сочетанием знаний и опыта. Мои два высших образования — психолог-педагог и врач анестезиолог-реаниматолог — позволяют мне видеть здоровье с разных сторон. Недавно завершенный базовый курс по нутрициологии добавил новую грань к моим профессиональным навыкам.</p>
            <p className='about-me__paragraph'>Я прошла обучение в Университете образовательной медицины на курсе Health-коучинга и очень кайфую от этого. Примерно как 5 лет назад от анестезиологии.</p>
            <p className='about-me__paragraph'>Помните, что здоровье — это не только правильное питание и физическая активность. Это также психологическое равновесие, умение управлять стрессом и находить радость в повседневной жизни. Ваша роль как нутрициолога — помочь пациентам найти этот баланс.</p>
          </div>
        </article>

      </div>
    </section>
  )
};