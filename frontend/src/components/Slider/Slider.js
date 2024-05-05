import { useState } from 'react';
import './Slider.css';
import { IconButton } from '../IconButton/IconButton';

export const Slider = ({children}) => {
  const [activeId, setActiveId] = useState(0);
  
  const prev = () => {
    setActiveId(activeId => {
      if (activeId > 0) {
        return activeId - 1
      } 
      return activeId
      })
  };

  const next = () => {
    setActiveId(activeId => {
      if (activeId < children.length - 1) {
        return activeId + 1
      }
      return activeId
      })
  };

  return (
    <div className='slider-wrap'>
  
      <div className='slider__actions'>
        <h1>IconButton</h1>
        <IconButton direction="left"
        className='icon-button'
          onClick={prev}
          disable={activeId === 0}
          
        />
        <IconButton direction="right"
          onClick={next}
          disable={activeId === children.length - 1}
        />
      </div>

      <div className='slider'>
        {children.map((slide, idx) => (
          <div className={`slide${idx === activeId ? ' active' : ''}`}>{slide}</div>
        ))}
      </div>
    </div>
  );
}
