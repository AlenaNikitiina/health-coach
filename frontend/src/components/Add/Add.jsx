import '../Add/Add.css';
import food from '../../images/food.jpg';

export default function Add () {
  return (
    <section className='add'>
      <div className='add__content'>
        <img className='add__img' src={food} alt="в холщевом мещке лежат овощи и фрукты" />
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