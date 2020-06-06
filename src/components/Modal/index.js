import React from 'react';
import cx from 'classnames';

import style from './index.module.scss';

export default function Modal({ children, onClose }) {
  return (
    <div className={style.ModalBG}>
      <div className={cx(style.Modal, style.error)}>
        <div>
          <button onClick={onClose}>close</button>
        </div>
        {children}
      </div>
    </div>
  )
}
