import React from 'react';

import style from './style.module.scss';

export default function ModalContent({ onClose = () => {} }) {
  const handleClick = () => {
    console.log('click');
    onClose();
  }
  const handleClick2 = () => {
    alert('home alert!');
  }
  return (
    <div className={style.Modal}>
      Home Modal Content
      <div>
        <button onClick={handleClick}>click</button>
      </div>
      <div>
        <button onClick={handleClick2}>alert</button>
      </div>
    </div>
  )
}
