import React from 'react';

import style from './index.module.scss';

export default function Modal({ children, onClose }) {
  return (
    <div className={style.ModalBG}>
      <div className={style.Modal}>
        <div>
          <button onClick={onClose}>close</button>
        </div>
        {children}
      </div>
    </div>
  )
}
