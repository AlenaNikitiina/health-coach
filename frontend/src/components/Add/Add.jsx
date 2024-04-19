import '../Add/Add.css';
import food from '../../images/food.jpg';

export default function Add () {
  return (
    <section>
      <div className='add__content'>
      <img className='add__img' src={food} alt="" />
      </div>
    </section>
    
  )
}

/*
export default function Ad () {
  return (
    <img className='eda' src={food} alt="" />
  )
}*/