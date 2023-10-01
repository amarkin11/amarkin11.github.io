import {
  FETCH_PROJECTS_TOTAL
} from '../../actions/actionTypes';

const updateProjectsTotal = (state, action) => {
  if(state === undefined) {
    return null;
  }

  switch(action.type) {
    case FETCH_PROJECTS_TOTAL:
      return action.payload
    default:
      return state.projectsTotal
  };
};

export default updateProjectsTotal;
