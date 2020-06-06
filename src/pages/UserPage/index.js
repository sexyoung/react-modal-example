import React from 'react';
import { connect } from 'react-redux';

import { show, hide } from 'actions';
import ModalContent from './ModalContent';

import style from './style.module.scss';

export function _UserPage(props) {
  return (
    <div className={style.UserPage}>
      UserPage
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

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hide()),
  show: payload => dispatch(show(payload)),
});

export const UserPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_UserPage);