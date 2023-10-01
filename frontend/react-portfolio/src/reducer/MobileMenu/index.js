import {
  TOGGLE_MENU
} from '../../actions/actionTypes';

const updateMobileMenu = (state, action) => {
  if(state === undefined) {
    return false;
  }

  switch(action.type) {
    case TOGGLE_MENU:
      return action.payload
    default:
      return state.mobileMenu
  };
};

export default updateMobileMenu;
