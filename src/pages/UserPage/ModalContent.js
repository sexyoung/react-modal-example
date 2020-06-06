import React from 'react';

import style from './style.module.scss';

export default function ModalContent({ onClose = () => {} }) {
  const handleClick = () => {
    console.log('click from user page');
    onClose();
  }

  return (
    <div className={style.Modal}>
      Usre Modal Content
      <div>
        <button onClick={handleClick}>click</button>
      </div>
    </div>
  )
}
