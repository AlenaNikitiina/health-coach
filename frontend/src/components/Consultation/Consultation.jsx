import '../Consultation/Consultation.css';

export default function Consultation () {
return (
  <section id='price' className='consultation'>
    <h1 className='consultation__heading'>Мои услуги</h1>
    <div className='consultation__content'>

      <div className='consultation__colomn'>
        <div className='consultation__text'>
          <h2 className='consultation__title'>Консультация</h2>
          <p className='consultation__paragraph'>Я могу:</p>
          <ul className='consultation__list'>
            <li className='consultation__item'>ответить на ваши вопросы, если они локальные и не требуют дальнейшей совместной работы.</li>
            <li className='consultation__item'>обозначить check-up по анализам и необходимым обследованиям.</li>
            <li className='consultation__item'>решить отдельные запросы по коррекции пищевой тарелки, продуктам питания.</li>
          </ul>
          <p className='consultation__price'>Цена консультации: 2000 руб./час</p>
        </div>

        <div>
          <a className="consultation__link link"
            href="https://t.me/litueva_life" target="_blank">
              Записаться<span className="service__arrow">⟶</span></a>
        </div>
      </div>

      <div className='consultation__colomn'>
        <div  className='consultation__text'>
          <h2 className='consultation__title'>Личное ведение</h2>
          <p className='consultation__paragraph'>В том случае, если вы хотите:</p>
          <ul className='consultation__list'>
            <li className='consultation__item'>личного консультирования ежедневно</li>
            <li className='consultation__item'>задавать мне вопросы в любое рабочее время</li>
            <li className='consultation__item'>интересоваться составом и сочетанием продуктов</li>
            <li className='consultation__item'>сдать check-up по анализам и услышать от меня обратную связь</li>
            <li className='consultation__item'>получать знания, которые останутся с вами в будущем</li>
            <li className='consultation__item'>чувствовать психологическую поддержку и помощь</li>
          </ul>
          <p className='consultation__paragraph'>Для ознакомления со мной и уверенности, что вы выбрали того, кто вам нужен, я даю бонус: <span className='consultation__span'>первая неделя бесплатно!</span></p>
          <p className='consultation__price'>Цена личного ведения: 10 000 руб./месяц</p>
        </div>

        <div>
          <a className="consultation__link link"
            href="https://t.me/litueva_life" target="_blank">
              Записаться<span className="service__arrow">⟶</span></a>
        </div>
      </div>
    </div>
  </section>
  )
}