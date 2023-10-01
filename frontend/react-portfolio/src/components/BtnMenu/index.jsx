import React from 'react';

import { connect } from 'react-redux';

import { toggleMenu } from '../../actions';

const BtnMenu = ({mobileMenu, toggleMenu}) => {
  const clazz = mobileMenu ? ' active' : '';

  return(
    <button
      className={`btn-menu${clazz}`}
      onClick={() => toggleMenu(!mobileMenu)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
};

const mapStateToProps = ({mobileMenu}) => {
  return {
    mobileMenu
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (active) => dispatch(toggleMenu(active))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnMenu);
