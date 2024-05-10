import './Warning.css';
import lenta from '../../images/lenta.JPG';

export default function Warning () {
  return (
    <section className='warning'>
      <div className='warning__content'>

        <article className='warning__text'>
          <img className='warning__img' src={lenta} alt='измерительная лента' />
          <h2 className='warning__heading'>Напутствие</h2>
          <div>
            <p className='warning__paragraph'>Хочу отметить, что иногда требуется совместная работа с другими специалистами и врачами. Если я рекомендую вам консультацию у терапевта, эндокринолога или психиатра, настоятельно рекомендую вам следовать этой рекомендации. Только совместные усилия могут привести к наилучшим результатам.</p>
            <p className='warning__paragraph'>Достижение цели, какой бы она не была долговременной и тяжелой - это ряд ступенек. Больших и маленьких шагов. А моя задача сделать этот первый шаг реальным. И он будет вместе со мной.</p>
          </div>
        </article>
      </div>
    </section>
  )
};
