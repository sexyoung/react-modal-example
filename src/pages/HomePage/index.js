import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { show, hide } from 'actions';
import ModalContent from './ModalContent';

import style from './style.module.scss';

function _HomePage(props) {

  const prevIsShowRef = useRef();

  useEffect(() => {
    prevIsShowRef.current = props.isShow;
  });

  const prevCount = prevIsShowRef.current;

  useEffect(() => {
    if(prevCount && prevCount !== props.isShow && !props.isShow) {
        alert('已關閉 modal');
    }
  }, [prevCount, props.isShow])

  return (
    <div className={style.HomePage}>
      HomePage
      <div>
        <button onClick={props.show.bind(this, {
          category: 'error',
          msg: <ModalContent onClose={props.hide} />,
        })}>
          show modal
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hide()),
  show: payload => dispatch(show(payload)),
});

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_HomePage);