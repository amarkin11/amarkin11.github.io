import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  SEARCH_PROJECTS,
  SORT_PROJECTS,
  FILTER_PROJECTS,
  RESET_SORT_PROJECTS
} from '../../actions/actionTypes';

const initialState = {
  projects: {},
  loading: true,
  error: null,
  term: '',
  sort: '',
  filter: ''
}

const updateProjectsList = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch(action.type) {
    case FETCH_PROJECTS_REQUEST:
      return initialState;
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...initialState,
        projects: action.payload,
        loading: false
      };
    case FETCH_PROJECTS_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload
      }
    case SEARCH_PROJECTS:
      return {
        ...state.projectsList,
        term: action.payload
      }
    case SORT_PROJECTS:
      return {
        ...state.projectsList,
        sort: action.payload
      }
    case FILTER_PROJECTS:
      return {
        ...state.projectsList,
        filter: action.payload
      }
    case RESET_SORT_PROJECTS:
      return {
        ...state.projectsList,
        sort: ''
      }
    default:
      return state.projectsList
  };
};

export default updateProjectsList;
