import './Warning.css';
import lenta from '../../images/lenta.JPG';

export default function Warning () {
  return (
    <section className='warning'>
      <div className='warning__content'>
        <article className='warning__text'>
          <img className='warning__img' src={lenta} alt='measuring tape' />
          <h2 className='warning__title'>С кем я</h2>
          <div>
            
            <p className='warning__paragraph'>Хочу отметить, что иногда требуется совместная работа с другими специалистами и врачами. Если я рекомендую вам консультацию у терапевта, эндокринолога или психиатра, настоятельно рекомендую вам следовать этой рекомендации. Только совместные усилия могут привести к наилучшим результатам.</p>
          </div>
        </article>
      </div>
    </section>
  )
}