import '../Consultation/Consultation.css';

export default function Consultation () {
return (
  <section id='price' className='consultation'>
    <h2 className='consultation__heading'>Мои услуги</h2>
    <div className='consultation__content'>

      <article className='consultation__colomn'>
        <div className='consultation__text'>
          <h3 className='consultation__caption'>Консультация</h3>
          <ul className='consultation__list'>
            <li className='consultation__item'>Ответы на вопросы по коррекции здорового образа жизни, если они локальные и не требуют дальнейшей совместной работы.</li>
            <li className='consultation__item'>Решение запросов по продуктам питания, пищевой тарелки, нутрицевтиков.</li>
            <li className='consultation__item'>Общие рекомендации по питанию, сну, физическим нагрузкам.</li>
          </ul>
          <p className='consultation__price'>Стоимость: 2000 руб./час</p>
        </div>

        <div>
          <a className="consultation__link link"
            href="https://t.me/litueva_life" target="_blank" rel='noreferrer'>Записаться<span>⟶</span>
          </a>
        </div>
      </article>

      <article className='consultation__colomn'>
        <div className='consultation__text'>
          <h3 className='consultation__caption'>Групповое ведение</h3>
          <ul className='consultation__list'>
            <li className='consultation__item'>Можно позвать подругу, коллегу-вместе веселее.</li>
            <li className='consultation__item'>Беседа в общем чате со мной ежедневно в рабочие часы.</li>
            <li className='consultation__item'>Работа без кураторов, я сама веду чат и отвечаю на вопросы.</li>
            <li className='consultation__item'>Общие рекомендации по питанию, сну, физическим нагрузкам.</li>
            <li className='consultation__item'>Обсуждение состава и сочетания продуктов.</li>
            <li className='consultation__item'>Рекомендации по минимальным нутрицевтикам.</li>
            <li className='consultation__item'>Встреча со мной на любой удобной платформе раз в неделю, ответы на вопросы, мини-лекции по главным вопросам ЗОЖ.</li>
          </ul>
          <p className='consultation__paragraph'>При наборе группы от 3-х человек </p>
          <p className='consultation__price'>Стоимость: 5000 руб./час</p>
        </div>

        <div>
          <a className="consultation__link link"
            href="https://t.me/litueva_life" target="_blank" rel='noreferrer'>Записаться<span>⟶</span>
          </a>
        </div>
      </article>

      <article className='consultation__colomn'>
        <div  className='consultation__text'>
          <h3 className='consultation__caption'>Индивидуальное сопровождение</h3>
          <ul className='consultation__list'>
            <li className='consultation__item'>Личное консультирование ежедневно в рабочие часы.</li>
            <li className='consultation__item'>Составление индивидуального плана питания.</li>
            <li className='consultation__item'>Контроль питания, расшифровка состава и сочетания продуктов.</li>
            <li className='consultation__item'>Рекомендации по нутрицевтикам и физической нагрузк.</li>
            <li className='consultation__item'>Техники по работе со стресс-менеджментом.</li>
            <li className='consultation__item'>Корректировка режима сна и бодрствования.</li>
            <li className='consultation__item'>Психологическая поддержка и помощь.</li>
            <li className='consultation__item'>Личная консультация со мной в формате онлайн-встречи раз в неделю.</li>
          </ul>
          <p className='consultation__price'>Стоимость: 10 000 руб./месяц</p>
        </div>

        <div>
          <a className="consultation__link link"
            href="https://t.me/litueva_life" target="_blank" rel='noreferrer'>Записаться<span>⟶</span>
          </a>
        </div>
      </article>
    </div>
  </section>
  )
}
