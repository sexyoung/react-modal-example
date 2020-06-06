import React from 'react';

import style from './style.module.scss';

export default function ModalContent({ onClose = () => {} }) {
  const handleClick = () => {
    console.log('click from about page');
    onClose();
  }

  const handleClick2 = () => {
    alert('about alert');
  }

  const handleClick3 = () => {
    alert('about alert 3');
  }

  return (
    <div className={style.Modal}>
      About Modal Content
      <div>
        <button onClick={handleClick}>click</button>
      </div>
      <div>
        <button onClick={handleClick2}>alert</button>
      </div>
      <div>
        <button onClick={handleClick3}>alert</button>
      </div>
    </div>
  )
}
